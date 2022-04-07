import React, { useEffect, useState } from "react";
import queryString from "query-string";
import io from "socket.io-client";
import "./Chat.css";
import InfoBar from "../InfoBar/InfoBar";
import Messages from "../Messages/Messages";
import Input from "../Input/Input";
import TextContainer from "../TextContainer/TextContainer";

let socket;

const Chat = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const [message, setMessage] = useState("");
	const [messages, setMessages] = useState([]);
	const [users, setUsers] = useState([]);
	const [userTyping, setUserTypping] = useState(false);
	let ENDPOINT = "https://chatsharnamiu.herokuapp.com/";

	useEffect(() => {
		const { name, room } = queryString.parse(window.location.search);
		setName(name);
		setRoom(room);
		socket = io(ENDPOINT);
		socket.emit("join", { name, room }, (error) => {
			if (error) {
				alert(error);
			}
		});
	}, [window.location.search, ENDPOINT]);

	useEffect(() => {
		socket.on("roomData", ({ users }) => {
			setUsers(users);
			console.log(users);
		});
		console.log(users);
		socket.on("message", (message) => {
			setMessages((messages) => [...messages, message]);
		});
	}, []);

	const sendMessage = (event) => {
		event.preventDefault();
		if (message) {
			socket.emit("sendMessage", message, () => setMessage(""));
		}
	};

	const type = (e) => {
		if (e) {
			socket.emit("typing", name);
		}
		socket.on("typing", (user) => {
			setUserTypping(true);
			setTimeout(function () {
				setUserTypping(false);
			}, 3000);
		});
	};

	return (
		<div className='outerContainer'>
			<div className='container'>
				<InfoBar room={room} />
				<Messages messages={messages} name={name} userTyping={userTyping} />
				<Input
					message={message}
					setMessage={setMessage}
					sendMessage={sendMessage}
					type={type}
				/>
			</div>
			<TextContainer users={users} />
		</div>
	);
};

export default Chat;

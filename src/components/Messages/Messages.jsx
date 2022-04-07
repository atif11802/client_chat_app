import React from "react";

import ScrollToBottom from "react-scroll-to-bottom";

import Message from "./Message/Message";

import "./Messages.css";

const Messages = ({ messages, name, userTyping }) => (
	<ScrollToBottom className='messages'>
		{messages.map((message, i) => (
			<div key={i}>
				<Message message={message} name={name} />
			</div>
		))}
		{userTyping && <p className='userTyping'>{name} is typing...</p>}
	</ScrollToBottom>
);

export default Messages;

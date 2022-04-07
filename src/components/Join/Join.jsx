import React, { useState } from "react";
import { Grid, TextField, Paper, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Join = () => {
	const [name, setName] = useState("");
	const [room, setRoom] = useState("");
	const navigate = useNavigate();

	const handleSubmit = () => {
		if (!name || !room) {
			return;
		}
		navigate(`/chat?name=${name}&room=${room}`);
	};

	return (
		<div
			style={{
				padding: 30,
				margin: "auto",
				width: "40%",
			}}
		>
			<Paper
				style={{
					padding: 40,
				}}
				elevation={3}
			>
				<Grid
					container
					spacing={3}
					direction={"column"}
					justify={"center"}
					alignItems={"center"}
				>
					<Grid item xs={12}>
						<TextField
							onChange={(e) => setName(e.target.value)}
							label='Username'
						></TextField>
					</Grid>
					<Grid item xs={12}>
						<TextField
							label='Room'
							onChange={(e) => setRoom(e.target.value)}
						></TextField>
					</Grid>

					<Grid item xs={12}>
						<Button onClick={handleSubmit} fullWidth>
							{" "}
							Login{" "}
						</Button>
					</Grid>
				</Grid>
			</Paper>
		</div>
	);
};

export default Join;

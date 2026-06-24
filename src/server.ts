/*
import http from "node:http";

const users: {
	name: string;
	status: boolean;
}[] = [
	{
		name: "Anderson",
		status: true,
	},
	{
		name: "Maria",
		status: true,
	},
	{
		name: "Jose",
		status: false,
	},
];

http
	.createServer((request, response) => {
		if (request.url === "/users" && request.method === "GET") {
			response.writeHead(200, {
				"content-type": "application/json",
			});
			response.end(JSON.stringify(users));
			return;
		}

		response.writeHead(404, {
			"content-type": "text/plain",
		});
		response.end("Not found!");
	})
	.listen(Number(process.env.PORT));

*/

import express from "express";

const app = express();

const users: {
	name: string;
	status: boolean;
}[] = [
	{
		name: "Anderson",
		status: true,
	},
	{
		name: "Maria",
		status: true,
	},
	{
		name: "Jose",
		status: false,
	},
];

app.use(express.json());

app.get("/users", (request, response) => {
	response.json(users);
});

app.listen(Number(process.env.PORT));

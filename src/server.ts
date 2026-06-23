import http from "node:http";

http
	.createServer(() => {
		console.log("HI!!");
	})
	.listen(Number(process.env.PORT));

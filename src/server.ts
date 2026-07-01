import express from "express";
import { customers } from "./mocks/customer.mock.ts";

const app = express();

app.use(express.json());

app.get("/customers", (_request, response) => {
	response.json(customers);
});

app.listen(Number(process.env.PORT));

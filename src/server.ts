import express from "express";
import CustomerRouter from "./routes/customer.routes.ts";
import InvoiceRouter from "./routes/invoice.routes.ts";

const app = express();

app.use(express.json());

app.use("/customers", CustomerRouter);
app.use("/invoices", InvoiceRouter);

app.use((_request, response) => {
	response.status(404).json({
		message: "Not Found!",
	});
});

app.listen(Number(process.env.PORT));

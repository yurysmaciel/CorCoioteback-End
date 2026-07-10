export type Customer = {
	id: number;
	name: string;
	email: string;
	status: boolean;
};

export type Invoice = {
	id: Number;
	value: String;
	customer_id: Number;
	status: "pending"  | "paid";
	create_AT: String;
}

export type CreateInvoice = Omit<Invoice, "id" | "status">;
type InvoiceWithoutId = Omit<Invoice, "id">;
export type UpdateInvoice = Partial<InvoiceWithoutId>;

export type CreateCustomer = Omit<Customer, "id" | "status">;
type CustomerWithoutId = Omit<Customer, "id">;
export type UpdateCustomer = Partial<CustomerWithoutId>;

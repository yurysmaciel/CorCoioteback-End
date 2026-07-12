import { Router } from "express";
import * as InvoiceController from "../controllers/invoice.controller.ts";

const router = Router();

router.get("/", InvoiceController.getAllInvoice);
router.get("/:id", InvoiceController.getInvoiceById);
router.post("/", InvoiceController.CreateInvoice);
router.put("/:id", InvoiceController.UpdateInvoice);
router.delete("/:id", InvoiceController.deleteInvoice);

export default router;

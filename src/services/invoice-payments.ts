import Service from "../service";
import ContextInterface from "../interfaces/context";
import InvoicePaymentsModel from "../models/invoice-payments";

class InvoicePaymentsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new InvoicePaymentsModel());
    }

}
export default InvoicePaymentsService;
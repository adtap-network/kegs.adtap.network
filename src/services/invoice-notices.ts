import Service from "../service";
import ContextInterface from "../interfaces/context";
import InvoiceNoticesModel from "../models/invoice-notices";

class InvoiceNoticesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new InvoiceNoticesModel());
    }

}
export default InvoiceNoticesService;
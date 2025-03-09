import Service from "../service";
import ContextInterface from "../interfaces/context";
import InvoicesModel from "../models/invoices";

class InvoicesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new InvoicesModel());
    }

}
export default InvoicesService;
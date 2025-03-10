import Service from "../service";
import ContextInterface from "../interfaces/context";
import InvoiceLinesModel from "../models/invoice-lines";

class InvoiceLinesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new InvoiceLinesModel());
    }

}
export default InvoiceLinesService;
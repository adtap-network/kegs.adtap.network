import Service from "../service";
import ContextInterface from "../interfaces/context";
import TicketFilesModel from "../models/ticket-files";

class TicketFilesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new TicketFilesModel());
    }

}
export default TicketFilesService;
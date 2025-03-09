import Service from "../service";
import ContextInterface from "../interfaces/context";
import TicketNotesModel from "../models/ticket-notes";

class TicketNotesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new TicketNotesModel());
    }

}
export default TicketNotesService;
import Service from "../service";
import ContextInterface from "../interfaces/context";
import TicketsModel from "../models/tickets";

class TicketsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new TicketsModel());
    }

}
export default TicketsService;
import Service from "../service";
import ContextInterface from "../interfaces/context";
import MessagesModel from "../models/messages";

class MessagesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new MessagesModel());
    }

}
export default MessagesService;
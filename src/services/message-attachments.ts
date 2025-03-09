import Service from "../service";
import ContextInterface from "../interfaces/context";
import MessageAttachmentsModel from "../models/message-attachments";

class MessageAttachmentsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new MessageAttachmentsModel());
    }

}
export default MessageAttachmentsService;
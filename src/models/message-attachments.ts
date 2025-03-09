import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { MessageAttachmentsSchema } from '../schemas/message-attachments';
import MessageAttachmentsCols from '../columns/message-attachments';

class MessageAttachmentModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblmessage_attachments',
            '',
            'a',
            MessageAttachmentsSchema,
            new MessageAttachmentsCols()
        );
    }
    
}
export default MessageAttachmentModel;
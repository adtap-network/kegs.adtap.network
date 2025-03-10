import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { MessagesSchema } from '../schemas/messages';
import MessagesCols from '../columns/messages';

class MessagesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblmessages',
            '',
            'a',
            MessagesSchema,
            new MessagesCols()
        );
    }
    
}
export default MessagesModel;
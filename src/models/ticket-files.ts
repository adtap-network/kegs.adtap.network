import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { TicketFilesSchema } from '../schemas/ticket-files';
import TicketFilesCols from '../columns/ticket-files';

class TicketFilesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblticket_files',
            '',
            'a',
            TicketFilesSchema,
            new TicketFilesCols()
        );
    }
    
}
export default TicketFilesModel;
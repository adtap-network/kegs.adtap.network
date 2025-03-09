import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { TicketNotesSchema } from '../schemas/ticket-notes';
import TicketNotesCols from '../columns/ticket-notes';

class TicketNotesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblticket_notes',
            '',
            'a',
            TicketNotesSchema,
            new TicketNotesCols()
        );
    }
    
}
export default TicketNotesModel;
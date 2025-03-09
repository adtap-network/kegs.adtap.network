import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { TicketsSchema } from '../schemas/tickets';
import TicketsCols from '../columns/tickets';

class TicketsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbltickets',
            '',
            'a',
            TicketsSchema,
            new TicketsCols()
        );
    }
    
}
export default TicketsModel;
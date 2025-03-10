import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class TicketsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['ticket_id','ticket_account','ticket_type','ticket_status','ticket_scope','ticket_severity','ticket_number','ticket_text','ticket_assigned','ticket_browser','ticket_os','ticket_openedon','ticket_assignedon','ticket_closedon'];
        this.insert = ['ticket_id','ticket_account','ticket_type','ticket_status','ticket_scope','ticket_severity','ticket_number','ticket_text','ticket_assigned','ticket_browser','ticket_os','ticket_openedon','ticket_assignedon','ticket_closedon'];
        this.update = ['ticket_id','ticket_account','ticket_type','ticket_status','ticket_scope','ticket_severity','ticket_number','ticket_text','ticket_assigned','ticket_browser','ticket_os','ticket_openedon','ticket_assignedon','ticket_closedon'];
        this.exact = ['ticket_id','ticket_account','ticket_type','ticket_status','ticket_scope','ticket_severity','ticket_number','ticket_assigned','ticket_browser','ticket_os','ticket_openedon','ticket_assignedon','ticket_closedon'];
        this.search = ['ticket_id','ticket_account','ticket_type','ticket_status','ticket_scope','ticket_severity','ticket_number','ticket_text','ticket_assigned','ticket_browser','ticket_os','ticket_openedon','ticket_assignedon','ticket_closedon'];

        this.guids = ['ticket_id'];
        this.strings = ['ticket_account','ticket_type','ticket_status','ticket_scope','ticket_number','ticket_text','ticket_assigned','ticket_browser','ticket_os'];
        this.dates = ['ticket_openedon','ticket_assignedon','ticket_closedon'];
        this.booleans = [];
        this.numbers = ['ticket_severity'];
        
        this.primary = 'ticket_id';
        this.sortcol = 'ticket_openedon';
        this.sortdir = 'desc';
        this.sortorder = 'ticket_openedon desc';
    }

}
export default TicketsCols;
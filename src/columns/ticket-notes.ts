import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class TicketNotesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['note_id','note_ticket','note_account','note_addedon','note_text'];
        this.insert = ['note_id','note_ticket','note_account','note_addedon','note_text'];
        this.update = ['note_id','note_ticket','note_account','note_addedon','note_text'];
        this.exact = ['note_id','note_ticket','note_account','note_addedon'];
        this.search = ['note_id','note_ticket','note_account','note_addedon','note_text'];

        this.guids = ['note_id','note_ticket'];
        this.strings = ['note_account','note_text'];
        this.dates = ['note_addedon'];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'note_id';
        this.sortcol = 'note_addedon';
        this.sortdir = 'desc';
        this.sortorder = 'note_addedon desc';
    }

}
export default TicketNotesCols;
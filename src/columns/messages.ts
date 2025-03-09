import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class MessagesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['message_id','message_sender','message_recipient','message_date','message_type','message_to','message_from','message_subject','message_body'];
        this.insert = ['message_id','message_sender','message_recipient','message_date','message_type','message_to','message_from','message_subject','message_body'];
        this.update = ['message_id','message_type','message_subject','message_body'];
        this.exact = ['message_id','message_sender','message_recipient','message_date','message_type','message_to','message_from','message_subject'];
        this.search = ['message_id','message_sender','message_recipient','message_date','message_type','message_to','message_from','message_subject','message_body'];

        this.guids = ['message_id'];
        this.strings = ['message_sender','message_recipient','message_type','message_to','message_from','message_subject','message_body'];
        this.dates = ['message_date'];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'message_id';
        this.sortcol = 'message_date';
        this.sortdir = 'desc';
        this.sortorder = 'message_date desc';
    }

}
export default MessagesCols;
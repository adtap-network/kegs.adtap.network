import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class InvoiceNoticesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['notice_id','notice_invoice','notice_sender','notice_recipient','notice_status','notice_name','notice_from','notice_to','notice_phone','notice_subject','notice_body','notice_attach','notice_senton','notice_readon'];
        this.insert = ['notice_id','notice_invoice','notice_sender','notice_recipient','notice_status','notice_name','notice_from','notice_to','notice_phone','notice_subject','notice_body','notice_attach','notice_senton','notice_readon'];
        this.update = ['notice_id','notice_invoice','notice_sender','notice_recipient','notice_status','notice_name','notice_from','notice_to','notice_phone','notice_subject','notice_body','notice_attach','notice_senton','notice_readon'];
        this.exact = ['notice_id','notice_invoice','notice_sender','notice_recipient','notice_status','notice_name','notice_from','notice_to','notice_phone','notice_subject','notice_body','notice_attach','notice_senton','notice_readon'];
        this.search = ['notice_id','notice_invoice','notice_sender','notice_recipient','notice_status','notice_name','notice_from','notice_to','notice_phone','notice_subject','notice_body','notice_attach','notice_senton','notice_readon'];

        this.guids = ['notice_id','notice_invoice'];
        this.strings = ['notice_sender','notice_recipient','notice_status','notice_name','notice_from','notice_to','notice_phone','notice_subject','notice_body','notice_attach'];
        this.dates = ['notice_senton','notice_readon'];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'notice_id';
        this.sortcol = 'notice_senton';
        this.sortdir = 'desc';
        this.sortorder = 'notice_senton desc';
    }

}
export default InvoiceNoticesCols;
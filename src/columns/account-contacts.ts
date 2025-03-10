import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class AccountContactsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['contact_id','contact_account','contact_target'];
        this.insert = ['contact_id','contact_account','contact_target'];
        this.update = ['contact_id','contact_account','contact_target'];
        this.exact = ['contact_id','contact_account','contact_target'];
        this.search = ['contact_id','contact_account','contact_target'];

        this.guids = ['contact_id'];
        this.strings = ['contact_account','contact_target'];
        this.dates = [];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'contact_id';
        this.sortcol = 'contact_target';
        this.sortdir = 'asc';
        this.sortorder = 'contact_target asc';
    }

}
export default AccountContactsCols;
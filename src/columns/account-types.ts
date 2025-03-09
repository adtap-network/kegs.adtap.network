import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class AccountTypesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['type_id','type_label'];
        this.insert = ['type_id','type_label'];
        this.update = ['type_id','type_label'];
        this.exact = ['type_id','type_label'];
        this.search = ['type_id','type_label'];

        this.guids = ['type_id'];
        this.strings = ['type_label'];
        this.dates = [];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'type_id';
        this.sortcol = 'type_label';
        this.sortdir = 'asc';
        this.sortorder = 'type_label asc';
    }

}
export default AccountTypesCols;
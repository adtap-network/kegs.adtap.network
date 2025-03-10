import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class AccountPermsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['perm_id','perm_account','perm_role'];
        this.insert = ['perm_id','perm_account','perm_role'];
        this.update = ['perm_id','perm_account','perm_role'];
        this.exact = ['perm_id','perm_account','perm_role'];
        this.search = ['perm_id','perm_account','perm_role'];

        this.guids = ['perm_id','perm_role'];
        this.strings = ['perm_account'];
        this.dates = [];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'perm_id';
        this.sortcol = 'perm_role';
        this.sortdir = 'asc';
        this.sortorder = 'perm_role asc';
    }

}
export default AccountPermsCols;


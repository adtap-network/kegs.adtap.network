import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class AccountBalancesCols extends Columns implements ColumnsInterface {    
    constructor() {
        super();
        this.select = ['balance_id','balance_account','balance_reward','balance_action','balance_memo','balance_amount','balance_total','balance_date'];
        this.insert = ['balance_id','balance_account','balance_reward','balance_action','balance_memo','balance_amount','balance_total','balance_date'];
        this.update = ['balance_id','balance_account','balance_reward','balance_action','balance_memo','balance_amount','balance_total','balance_date'];
        this.exact = ['balance_id','balance_account','balance_reward','balance_action','balance_memo','balance_amount','balance_total','balance_date'];
        this.search = ['balance_id','balance_account','balance_reward','balance_action','balance_memo','balance_amount','balance_total','balance_date'];

        this.guids = ['balance_id'];
        this.strings = ['balance_account','balance_reward','balance_action','balance_memo'];
        this.dates = ['balance_date'];
        this.booleans = [];
        this.numbers = ['balance_amount','balance_total'];
        
        this.primary = 'balance_id';
        this.sortcol = 'balance_date';
        this.sortdir = 'desc';
        this.sortorder = 'balance_date desc';
    }    
}
export default AccountBalancesCols;



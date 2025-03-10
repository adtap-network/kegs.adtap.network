import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class AccountRewardsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['reward_id','reward_program','reward_account','reward_status','reward_enrolledon'];
        this.insert = ['reward_id','reward_program','reward_account','reward_status','reward_enrolledon'];
        this.update = ['reward_id','reward_program','reward_account','reward_status','reward_enrolledon'];
        this.exact = ['reward_id','reward_program','reward_account','reward_status','reward_enrolledon'];
        this.search = ['reward_id','reward_program','reward_account','reward_status','reward_enrolledon'];

        this.guids = ['reward_id'];
        this.strings = ['reward_program','reward_account','reward_status'];
        this.dates = ['reward_enrolledon'];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'reward_id';
        this.sortcol = 'reward_enrolledon';
        this.sortdir = 'desc';
        this.sortorder = 'reward_enrolledon desc';
    }
}
export default AccountRewardsCols;
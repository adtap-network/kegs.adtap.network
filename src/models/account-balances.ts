import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountBalancesSchema } from '../schemas/account-balances';
import AccountBalancesCols from '../columns/account-balances';

class AccountBalancesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblaccount_balances',
            '',
            'a',
            AccountBalancesSchema,
            new AccountBalancesCols()
        );
    }
    
}
export default AccountBalancesModel;
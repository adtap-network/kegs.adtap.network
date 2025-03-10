import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountValuesSchema } from '../schemas/account-values';
import AccountValuesCols from '../columns/account-values';

class AccountValuesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblaccount_values',
            '',
            'a',
            AccountValuesSchema,
            new AccountValuesCols()
        );
    }
    
}
export default AccountValuesModel;
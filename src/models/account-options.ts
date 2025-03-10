import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountOptionsSchema } from '../schemas/account-options';
import AccountOptionsCols from '../columns/account-options';

class AccountOptionsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblaccount_options',
            '',
            'a',
            AccountOptionsSchema,
            new AccountOptionsCols()
        );
    }
    
}
export default AccountOptionsModel;
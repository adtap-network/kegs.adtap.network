import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountsSchema } from '../schemas/accounts';
import AccountsCols from '../columns/accounts';

class AccountsModel extends CommonModel implements CommonModelInterface {
    constructor() { 
        super(
            'tblaccounts',
            '',
            'a',
            AccountsSchema,
            new AccountsCols()
        );    }
    
}
export default AccountsModel;
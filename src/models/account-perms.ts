import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountPermsSchema } from '../schemas/account-perms';
import AccountPermsCols from '../columns/account-perms';

class AccountPermsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblaccount_perms',
            '',
            'a',
            AccountPermsSchema,
            new AccountPermsCols()
        );
    }
    
}
export default AccountPermsModel;
import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountContactsSchema } from '../schemas/account-contacts';
import AccountContactsCols from '../columns/account-contacts';

class AccountContactsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblaccount_contacts',
            '',
            'a',
            AccountContactsSchema,
            new AccountContactsCols()
        );
    }
    
}
export default AccountContactsModel;
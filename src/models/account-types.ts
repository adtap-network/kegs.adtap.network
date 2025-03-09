import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountTypesSchema } from '../schemas/account-types';
import AccountTypesCols from '../columns/account-types';

class AccountTypesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblaccount_types',
            '',
            'a',
            AccountTypesSchema,
            new AccountTypesCols()
        );
    }
    
}
export default AccountTypesModel;
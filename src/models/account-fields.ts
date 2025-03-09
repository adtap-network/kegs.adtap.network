import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountFieldsSchema } from '../schemas/account-fields';
import AccountFieldsCols from '../columns/account-fields';

class AccountFieldsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblaccount_fields',
            '',
            'a',
            AccountFieldsSchema,
            new AccountFieldsCols()
        );
    }
    
}
export default AccountFieldsModel;
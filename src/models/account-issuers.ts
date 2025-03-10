import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountIssuersSchema } from '../schemas/account-issuers';
import AccountIssuersCols from '../columns/account-issuers';

class AccountIssuersModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblaccount_issuers',
            '',
            'a',
            AccountIssuersSchema,
            new AccountIssuersCols()
        );
    }
    
}
export default AccountIssuersModel;
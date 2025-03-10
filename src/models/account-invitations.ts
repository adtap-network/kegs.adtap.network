import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { AccountInvitationsSchema } from '../schemas/account-invitations';
import AccountInvitationsCols from '../columns/account-invitations';

class AccountInvitationsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblaccount_invitations',
            '',
            'a',
            AccountInvitationsSchema,
            new AccountInvitationsCols()
        );
    }
    
}
export default AccountInvitationsModel;
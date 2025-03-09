import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountInvitationsModel from "../models/account-invitations";

class AccountInvitationsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountInvitationsModel());
    }
}
export default AccountInvitationsService;
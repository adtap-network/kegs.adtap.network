import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountPermsModel from "../models/account-perms";

class AccountPermsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountPermsModel());
    }

}
export default AccountPermsService;
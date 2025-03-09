import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountContactsModel from "../models/account-contacts";

class AccountContactsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountContactsModel());
    }

}
export default AccountContactsService;
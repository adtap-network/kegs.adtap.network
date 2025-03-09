import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountsModel from "../models/accounts";

class AccountsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountsModel());
    }

}
export default AccountsService;
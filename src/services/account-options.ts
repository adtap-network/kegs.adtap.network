import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountOptionsModel from "../models/account-options";

class AccountOptionsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountOptionsModel());
    }

}
export default AccountOptionsService;
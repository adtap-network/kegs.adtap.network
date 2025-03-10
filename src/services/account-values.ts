import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountValuesModel from "../models/account-values";

class AccountValuesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountValuesModel());
    }

}
export default AccountValuesService;
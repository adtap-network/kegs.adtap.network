import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountBalancesModel from "../models/account-balances";

class AccountBalancesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountBalancesModel());
    }

}
export default AccountBalancesService;
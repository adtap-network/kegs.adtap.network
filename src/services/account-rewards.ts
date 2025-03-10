import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountRewardsModel from "../models/account-rewards";

class AccountRewardsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountRewardsModel());
    }

}
export default AccountRewardsService;
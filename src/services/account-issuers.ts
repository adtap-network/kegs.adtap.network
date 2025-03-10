import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountIssuersModel from "../models/account-issuers";

class AccountIssuersService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountIssuersModel());
    }

}
export default AccountIssuersService;
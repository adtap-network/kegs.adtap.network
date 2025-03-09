import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountFieldsModel from "../models/account-fields";

class AccountFieldsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountFieldsModel());
    }

}
export default AccountFieldsService;
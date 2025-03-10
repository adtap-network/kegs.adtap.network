import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountTypesModel from "../models/account-types";

class AccountTypesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountTypesModel());
    }

}
export default AccountTypesService;
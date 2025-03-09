import Service from "../service";
import ContextInterface from "../interfaces/context";
import AccountActivitiesModel from "../models/account-activities";

class AccountActivitiesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new AccountActivitiesModel());
    }

}
export default AccountActivitiesService;
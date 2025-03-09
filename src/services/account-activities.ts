import { AdapterInterface } from "bns.adtap.network";
import MysqlAdapter from "../adapters/my";
import PgAdapter from "../adapters/pg";
import AccountActivitiesModel from "../models/account-activities";

class AccountActivitiesService extends CommonService {

    context: CommonContext;
    adapter: AdapterInterface;

    constructor(context: CommonContext) {
        super();
        this.context = context;
        if(this.context.datastore == 'my') { this.adapter = new MysqlAdapter(this.context.datasources.my.adtap, new AccountActivitiesModel()); }
        else { this.adapter = new PgAdapter(this.context.datasources.pg.adtap, new AccountActivitiesModel()); }
    }

}
export default AccountActivitiesService;
import CommonContext from "../context";
import CommonAdapterInterface from "bns.adtap.network";
import CommonService from "../service";
import MysqlAdapter from "../adapters/my";
import PgAdapter from "../adapters/pg";
import AccountBalancesModel from "../models/account-balances";

class AccountBalancesService extends CommonService {

    context: CommonContext;
    adapter: CommonAdapterInterface;

    constructor(context: CommonContext) {
        super();
        this.context = context;
        if(this.context.datastore == 'my') { this.adapter = new MysqlAdapter(this.context.datasources.my.adtap, new AccountBalancesModel()); }
        else { this.adapter = new PgAdapter(this.context.datasources.pg.adtap, new AccountBalancesModel()); }
    }

}
export default AccountBalancesService;
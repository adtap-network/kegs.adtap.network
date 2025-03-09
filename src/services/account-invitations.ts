import CommonContext from "../context";
import CommonAdapterInterface from "bns.adtap.network";
import CommonService from "../service";
import MysqlAdapter from "../adapters/my";
import PgAdapter from "../adapters/pg";
import AccountInvitationsModel from "../models/account-invitations";

class AccountInvitationsService extends CommonService {

    context: CommonContext;
    adapter: CommonAdapterInterface;

    constructor(context: CommonContext) {
        super();
        this.context = context;
        if(this.context.datastore == 'my') { this.adapter = new MysqlAdapter(this.context.datasources.my.adtap, new AccountInvitationsModel()); }
        else { this.adapter = new PgAdapter(this.context.datasources.pg.adtap, new AccountInvitationsModel()); }
    }

}
export default AccountInvitationsService;
import CommonContext from "../context";
import CommonAdapterInterface from "bns.adtap.network";
import CommonService from "../service";
import MysqlAdapter from "../adapters/my";
import PgAdapter from "../adapters/pg";
import InvoicesModel from "../models/invoices";

class InvoicesService extends CommonService {

    context: CommonContext;
    adapter: CommonAdapterInterface;

    constructor(context: CommonContext) {
        super();
        this.context = context;
        if(this.context.datastore == 'my') { this.adapter = new MysqlAdapter(this.context.datasources.my.adtap, new InvoicesModel()); }
        else { this.adapter = new PgAdapter(this.context.datasources.pg.adtap, new InvoicesModel()); }
    }

}
export default InvoicesService;
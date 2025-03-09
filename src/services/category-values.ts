import CommonContext from "../context";
import CommonAdapterInterface from "bns.adtap.network";
import CommonService from "../service";
import MysqlAdapter from "../adapters/my";
import PgAdapter from "../adapters/pg";
import CategoryValuesModel from "../models/category-values";

class CategoryValuesService extends CommonService {

    context: CommonContext;
    adapter: CommonAdapterInterface;

    constructor(context: CommonContext) {
        super();
        this.context = context;
        if(this.context.datastore == 'my') { this.adapter = new MysqlAdapter(this.context.datasources.my.adtap, new CategoryValuesModel()); }
        else { this.adapter = new PgAdapter(this.context.datasources.pg.adtap, new CategoryValuesModel()); }
    }

}
export default CategoryValuesService;
import CommonContext from "../../context";
import CommonAdapterInterface from "../../interfaces/adapter";
import CommonService from "../service";
import MysqlAdapter from "../adapters/my";
import PgAdapter from "../adapters/pg";
import OfferPricesModel from "../models/offer-prices";

class OfferPricesService extends CommonService {

    context: CommonContext;
    adapter: CommonAdapterInterface;

    constructor(context: CommonContext) {
        super();
        this.context = context;
        if(this.context.datastore == 'my') { this.adapter = new MysqlAdapter(this.context.datasources.my.adtap, new OfferPricesModel()); }
        else { this.adapter = new PgAdapter(this.context.datasources.pg.adtap, new OfferPricesModel()); }
    }

}
export default OfferPricesService;
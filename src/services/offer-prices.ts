import Service from "../service";
import ContextInterface from "../interfaces/context";
import OfferPricesModel from "../models/offer-prices";

class OfferPricesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OfferPricesModel());
    }

}
export default OfferPricesService;
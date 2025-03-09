import Service from "../service";
import ContextInterface from "../interfaces/context";
import OfferViewsModel from "../models/offer-views";

class OfferViewsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OfferViewsModel());
    }

}
export default OfferViewsService;
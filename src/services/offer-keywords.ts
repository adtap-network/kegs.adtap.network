import Service from "../service";
import ContextInterface from "../interfaces/context";
import OfferKeywordsModel from "../models/offer-keywords";

class OfferKeywordsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OfferKeywordsModel());
    }

}
export default OfferKeywordsService;
import Service from "../service";
import ContextInterface from "../interfaces/context";
import OfferReviewsModel from "../models/offer-reviews";

class OfferReviewsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OfferReviewsModel());
    }

}
export default OfferReviewsService;
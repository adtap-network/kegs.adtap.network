import Service from "../service";
import ContextInterface from "../interfaces/context";
import OfferCategoriesModel from "../models/offer-categories";

class OfferCategoriesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OfferCategoriesModel());
    }

}
export default OfferCategoriesService;
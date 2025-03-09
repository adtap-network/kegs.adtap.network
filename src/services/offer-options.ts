import Service from "../service";
import ContextInterface from "../interfaces/context";
import OfferOptionsModel from "../models/offer-options";

class OfferOptionsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OfferOptionsModel());
    }

}
export default OfferOptionsService;
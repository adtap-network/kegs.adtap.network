import Service from "../service";
import ContextInterface from "../interfaces/context";
import OfferValuesModel from "../models/offer-values";

class OfferValuesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OfferValuesModel());
    }

}
export default OfferValuesService;
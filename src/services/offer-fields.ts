import Service from "../service";
import ContextInterface from "../interfaces/context";
import OfferFieldsModel from "../models/offer-fields";

class OfferFieldsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OfferFieldsModel());
    }

}
export default OfferFieldsService;
import Service from "../service";
import ContextInterface from "../interfaces/context";
import OfferFavoritesModel from "../models/offer-favorites";

class OfferFavoritesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OfferFavoritesModel());
    }

}
export default OfferFavoritesService;
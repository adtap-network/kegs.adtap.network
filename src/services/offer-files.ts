import Service from "../service";
import ContextInterface from "../interfaces/context";
import OfferFilesModel from "../models/offer-files";

class OfferFilesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OfferFilesModel());
    }

}
export default OfferFilesService;
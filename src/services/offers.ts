import Service from "../service";
import ContextInterface from "../interfaces/context";
import OffersModel from "../models/offers";

class OffersService extends Service {

    constructor(context: ContextInterface) {
        super(context, new OffersModel());
    }
}
export default OffersService;
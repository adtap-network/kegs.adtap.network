import Service from "../service";
import ContextInterface from "../interfaces/context";
import QuoteHistoriesModel from "../models/quote-histories";

class QuoteHistoriesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new QuoteHistoriesModel());
    }

}
export default QuoteHistoriesService;
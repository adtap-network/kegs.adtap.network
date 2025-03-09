import Service from "../service";
import ContextInterface from "../interfaces/context";
import QuotesModel from "../models/quotes";

class QuotesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new QuotesModel());
    }

}
export default QuotesService;
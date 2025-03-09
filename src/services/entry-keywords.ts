import Service from "../service";
import ContextInterface from "../interfaces/context";
import EntryKeywordsModel from "../models/entry-keywords";

class EntryKeywordsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new EntryKeywordsModel());
    }

}
export default EntryKeywordsService;
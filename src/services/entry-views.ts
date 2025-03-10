import Service from "../service";
import ContextInterface from "../interfaces/context";
import EntryViewsModel from "../models/entry-views";

class EntryViewsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new EntryViewsModel());
    }

}
export default EntryViewsService;
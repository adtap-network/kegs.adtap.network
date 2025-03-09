import Service from "../service";
import ContextInterface from "../interfaces/context";
import EntryCommentsModel from "../models/entry-comments";

class EntryCommentsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new EntryCommentsModel());
    }

}
export default EntryCommentsService;
import Service from "../service";
import ContextInterface from "../interfaces/context";
import EntryFieldsModel from "../models/entry-fields";

class EntryFieldsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new EntryFieldsModel());
    }

}
export default EntryFieldsService;
import Service from "../service";
import ContextInterface from "../interfaces/context";
import EntryOptionsModel from "../models/entry-options";

class EntryOptionsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new EntryOptionsModel());
    }
}
export default EntryOptionsService;
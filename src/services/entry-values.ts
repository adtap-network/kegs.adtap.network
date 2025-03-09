import Service from "../service";
import ContextInterface from "../interfaces/context";
import EntryValuesModel from "../models/entry-values";

class EntryValuesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new EntryValuesModel());
    }

}
export default EntryValuesService;
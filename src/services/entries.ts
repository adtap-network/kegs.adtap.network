import Service from "../service";
import ContextInterface from "../interfaces/context";
import EntriesModel from "../models/entries";

class EntriesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new EntriesModel());
    }

}
export default EntriesService;
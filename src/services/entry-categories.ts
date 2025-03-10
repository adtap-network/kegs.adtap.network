import Service from "../service";
import ContextInterface from "../interfaces/context";
import EntryCategoriesModel from "../models/entry-categories";

class EntryCategoriesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new EntryCategoriesModel());
    }

}
export default EntryCategoriesService;
import Service from "../service";
import ContextInterface from "../interfaces/context";
import CategoryOptionsModel from "../models/category-options";

class CategoryOptionsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new CategoryOptionsModel());
    }

}
export default CategoryOptionsService;
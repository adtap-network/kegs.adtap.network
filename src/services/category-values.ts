import Service from "../service";
import ContextInterface from "../interfaces/context";
import CategoryValuesModel from "../models/category-values";

class CategoryValuesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new CategoryValuesModel());
    }

}
export default CategoryValuesService;
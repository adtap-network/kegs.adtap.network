import Service from "../service";
import ContextInterface from "../interfaces/context";
import CategoryFieldsModel from "../models/category-fields";

class CategoryFieldsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new CategoryFieldsModel());
    }

}
export default CategoryFieldsService;
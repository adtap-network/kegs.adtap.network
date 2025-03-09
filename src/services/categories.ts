import Service from "../service";
import ContextInterface from "../interfaces/context";
import CategoriesModel from "../models/categories";

class CategoriesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new CategoriesModel());
    }

}
export default CategoriesService;
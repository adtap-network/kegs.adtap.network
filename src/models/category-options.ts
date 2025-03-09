import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { CategoryOptionsSchema } from '../schemas/category-options';
import CategoryOptionsCols from '../columns/category-options';

class CategoryOptionsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblcategory_options',
            '',
            'a',
            CategoryOptionsSchema,
            new CategoryOptionsCols()
        );
    }
    
}
export default CategoryOptionsModel
import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { CategoryFieldsSchema } from '../schemas/category-fields';
import CategoryFieldsCols from '../columns/category-fields';

class CategoryFieldsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblcategory_fields',
            '',
            'a',
            CategoryFieldsSchema,
            new CategoryFieldsCols()
        );
    }
    
}
export default CategoryFieldsModel
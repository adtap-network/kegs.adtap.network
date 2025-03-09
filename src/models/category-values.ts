import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { CategoryValuesSchema } from '../schemas/category-values';
import CategoryValuesCols from '../columns/category-values';

class CategoryValuesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblcategory_values',
            '',
            'a',
            CategoryValuesSchema,
            new CategoryValuesCols()
        );
    }
    
}
export default CategoryValuesModel
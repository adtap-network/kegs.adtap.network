import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { CategoriesSchema } from '../schemas/categories';
import CategoriesCols from '../columns/categories';

class CategoriesModel extends CommonModel implements CommonModelInterface {
    constructor() { 
        super(
            'tblcategories',
            '',
            'a',
            CategoriesSchema,
            new CategoriesCols()
        );    }
    
}
export default CategoriesModel;
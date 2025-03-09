import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { EntryCategoriesSchema } from '../schemas/entry-categories';
import EntryCategoriesCols from '../columns/entry-categories';

class EntryCategoriesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblentry_categories',
            '',
            'a',
            EntryCategoriesSchema,
            new EntryCategoriesCols()
        );
    }    
}
export default EntryCategoriesModel;
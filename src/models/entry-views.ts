import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { EntryViewsSchema } from '../schemas/entry-views';
import EntryViewsCols from '../columns/entry-views';

class EntryViewsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblentry_views',
            '',
            'a',
            EntryViewsSchema,
            new EntryViewsCols()
        );
    }
    
}
export default EntryViewsModel;
import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { EntryKeywordsSchema } from '../schemas/entry-keywords';
import EntryKeywordsCols from '../columns/entry-keywords';

class EntryKeywordsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblentry_keywords',
            '',
            'a',
            EntryKeywordsSchema,
            new EntryKeywordsCols()
        );
    }
    
}
export default EntryKeywordsModel;
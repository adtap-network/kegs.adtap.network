import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { EntryFieldsSchema } from '../schemas/entry-fields';
import EntryFieldsCols from '../columns/entry-fields';

class EntryFieldsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblentry_fields',
            '',
            'a',
            EntryFieldsSchema,
            new EntryFieldsCols()
        );
    }
    
}
export default EntryFieldsModel;
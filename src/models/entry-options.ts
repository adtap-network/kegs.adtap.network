import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { EntryOptionsSchema } from '../schemas/entry-options';
import EntryOptionsCols from '../columns/entry-options';

class EntryOptionsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblentry_options',
            '',
            'a',
            EntryOptionsSchema,
            new EntryOptionsCols()
        );
    }
    
}
export default EntryOptionsModel;
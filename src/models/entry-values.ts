import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { EntryValuesSchema } from '../schemas/entry-values';
import EntryValuesCols from '../columns/entry-values';

class EntryValuesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblentry_values',
            '',
            'a',
            EntryValuesSchema,
            new EntryValuesCols()
        );
    }
    
}
export default EntryValuesModel;
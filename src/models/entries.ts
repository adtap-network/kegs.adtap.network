import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { EntriesSchema } from '../schemas/entries';
import EntriesCols from '../columns/entries';


class EntriesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblentries',
            '',
            'a',
            EntriesSchema,
            new EntriesCols()
        );
    }
    
}
export default EntriesModel;
import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { EntryFilesSchema } from '../schemas/entry-files';
import EntryFilesCols from '../columns/entry-files';

class EntryFilesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblentry_files',
            '',
            'a',
            EntryFilesSchema,
            new EntryFilesCols()
        );
    }
    
}
export default EntryFilesModel;
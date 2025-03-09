import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { EntryCommentsSchema } from '../schemas/entry-comments';
import EntryCommentsCols from '../columns/entry-comments';

class EntryCommentsModel extends CommonModel implements CommonModelInterface {
    constructor() { 
        super(
            'tblentry_comments',
            '',
            'a',
            EntryCommentsSchema,
            new EntryCommentsCols()
        );
    }    
}
export default EntryCommentsModel;
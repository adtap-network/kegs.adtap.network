import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class EntryCommentsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['comment_id','comment_entry','comment_account','comment_addedon','comment_text','comment_stars'];
        this.insert = ['comment_id','comment_entry','comment_account','comment_addedon','comment_text','comment_stars'];
        this.update = ['comment_id','comment_entry','comment_account','comment_addedon','comment_text','comment_stars'];
        this.exact = ['comment_id','comment_entry','comment_account','comment_addedon','comment_text','comment_stars'];
        this.search = ['comment_id','comment_entry','comment_account','comment_addedon','comment_text','comment_stars'];

        this.guids = ['comment_id','comment_entry'];
        this.strings = ['comment_account','comment_text'];
        this.dates = ['comment_addedon'];
        this.booleans = [];
        this.numbers = ['comment_stars'];
        
        this.primary = 'comment_id';
        this.sortcol = 'comment_addedon';
        this.sortdir = 'desc';
        this.sortorder = 'comment_addedon desc';
    }

}
export default EntryCommentsCols;
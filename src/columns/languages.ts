import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class LanguagesCols extends Columns implements ColumnsInterface {
    constructor() {
        super();
        
        this.select = ['lang_id','lang_name','lang_code'];
        this.insert = ['lang_id','lang_name','lang_code'];
        this.update = ['lang_name','lang_code'];
        this.exact = ['lang_id','lang_name','lang_code'];
        this.search = ['lang_id','lang_name','lang_code'];
        
        this.guids = ['lang_id'];
        this.strings = ['lang_name','lang_code'];
        
        this.primary = 'lang_id';
        this.sortcol = 'lang_code';
        this.sortdir = 'asc';
        this.sortorder = 'lang_code asc';
    }
}
export default LanguagesCols;
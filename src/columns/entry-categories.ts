import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class EntryCategoriesCols extends Columns implements ColumnsInterface {
    constructor() {
        super();
        this.select = ['oc_id','oc_entry','oc_category','oc_default'];
        this.insert = ['oc_id','oc_entry','oc_category','oc_default'];
        this.update = ['oc_id','oc_default'];
        this.exact = ['oc_id','oc_entry','oc_category','oc_default'];
        this.search = ['oc_id','oc_entry','oc_category','oc_default'];

        this.guids = ['oc_id','oc_entry','oc_category'];
        this.strings = [];
        this.dates = [];
        this.booleans = ['oc_default'];
        this.numbers = [];
        
        this.primary = 'oc_id';
        this.sortcol = 'oc_default';
        this.sortdir = 'desc';
        this.sortorder = 'oc_default desc';
    }
}
export default EntryCategoriesCols;

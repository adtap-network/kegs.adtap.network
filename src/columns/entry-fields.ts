import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class EntryFieldsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['field_id','field_entry','field_class','field_type','field_key','field_label','field_sort'];
        this.insert = ['field_id','field_entry','field_class','field_type','field_key','field_label','field_sort'];
        this.update = ['field_id','field_entry','field_class','field_type','field_key','field_label','field_sort'];
        this.exact = ['field_id','field_entry','field_class','field_type','field_key','field_label','field_sort'];
        this.search = ['field_id','field_entry','field_class','field_type','field_key','field_label','field_sort'];

        this.guids = ['field_id','field_entry'];
        this.strings = ['field_class','field_type','field_key','field_label'];
        this.dates = [];
        this.booleans = [];
        this.numbers = ['field_sort'];
        
        this.primary = 'field_id';
        this.sortcol = 'field_sort';
        this.sortdir = 'asc';
        this.sortorder = 'field_sort asc';
    }

}
export default EntryFieldsCols;
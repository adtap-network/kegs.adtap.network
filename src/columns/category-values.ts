import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class CategoryValuesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['value_id','value_category','value_option','value_free'];
        this.insert = ['value_id','value_category','value_option','value_free'];
        this.update = ['value_id','value_category','value_option','value_free'];
        this.exact = ['value_id','value_category','value_option','value_free'];
        this.search = ['value_id','value_category','value_option','value_free'];

        this.guids = ['value_id','value_category','value_option'];
        this.strings = ['value_free'];
        this.dates = [];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'value_id';
        this.sortcol = 'value_category';
        this.sortdir = 'asc';
        this.sortorder = 'value_category asc';
    }
}
export default CategoryValuesCols;
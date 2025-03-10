import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class OfferOptionsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['option_id','option_field','option_type','option_label','option_value','option_sort'];
        this.insert = ['option_id','option_field','option_type','option_label','option_value','option_sort'];
        this.update = ['option_id','option_field','option_type','option_label','option_value','option_sort'];
        this.exact = ['option_id','option_field','option_type','option_label','option_value','option_sort'];
        this.search = ['option_id','option_field','option_type','option_label','option_value','option_sort'];

        this.guids = ['option_id','option_field'];
        this.strings = ['option_type','option_label','option_value'];
        this.dates = [];
        this.booleans = [];
        this.numbers = ['option_sort'];
        
        this.primary = 'option_id';
        this.sortcol = 'option_sort';
        this.sortdir = 'asc';
        this.sortorder = 'option_sort asc';
    }

}
export default OfferOptionsCols;
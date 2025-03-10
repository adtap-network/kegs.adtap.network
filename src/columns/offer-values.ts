import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class OfferValuesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['value_id','value_offer','value_field','value_option','value_free'];
        this.insert = ['value_id','value_offer','value_field','value_option','value_free'];
        this.update = ['value_id','value_offer','value_field','value_option','value_free'];
        this.exact = ['value_id','value_offer','value_field','value_option','value_free'];
        this.search = ['value_id','value_offer','value_field','value_option','value_free'];

        this.guids = ['value_id','value_offer','value_field','value_option'];
        this.strings = ['value_free'];
        this.dates = [];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'value_id';
        this.sortcol = 'value_offer';
        this.sortdir = 'asc';
        this.sortorder = 'value_offer asc';
    }

}
export default OfferValuesCols;
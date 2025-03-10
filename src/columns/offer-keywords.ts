import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class OfferKeywordsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['keyword_id','keyword_offer','keyword_text'];
        this.insert = ['keyword_id','keyword_offer','keyword_text'];
        this.update = ['keyword_id','keyword_offer','keyword_text'];
        this.exact = ['keyword_id','keyword_offer','keyword_text'];
        this.search = ['keyword_id','keyword_offer','keyword_text'];

        this.guids = ['keyword_id','keyword_offer'];
        this.strings = ['keyword_text'];
        this.dates = [];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'keyword_id';
        this.sortcol = 'keyword_offer';
        this.sortdir = 'asc';
        this.sortorder = 'keyword_offer asc';
    }

}
export default OfferKeywordsCols;
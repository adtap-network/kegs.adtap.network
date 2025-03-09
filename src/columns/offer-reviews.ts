import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class OfferReviewsCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['review_id','review_offer','review_account','review_addedon','review_text','review_stars'];
        this.insert = ['review_id','review_offer','review_account','review_addedon','review_text','review_stars'];
        this.update = ['review_id','review_offer','review_account','review_addedon','review_text','review_stars'];
        this.exact = ['review_id','review_offer','review_account','review_addedon','review_text','review_stars'];
        this.search = ['review_id','review_offer','review_account','review_addedon','review_text','review_stars'];

        this.guids = ['review_id','review_offer'];
        this.strings = ['review_account','review_text'];
        this.dates = ['review_addedon'];
        this.booleans = [];
        this.numbers = ['review_stars'];
        
        this.primary = 'review_id';
        this.sortcol = 'review_addedon';
        this.sortdir = 'desc';
        this.sortorder = 'review_addedon desc';
    }

}
export default OfferReviewsCols;
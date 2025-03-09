import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class OfferFavoritesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['favorite_id','favorite_offer','favorite_account','favorite_createdon'];
        this.insert = ['favorite_id','favorite_offer','favorite_account','favorite_createdon'];
        this.update = ['favorite_id','favorite_offer','favorite_account','favorite_createdon'];
        this.exact = ['favorite_id','favorite_offer','favorite_account','favorite_createdon'];
        this.search = ['favorite_id','favorite_offer','favorite_account','favorite_createdon'];

        this.guids = ['favorite_id','favorite_offer'];
        this.strings = ['favorite_account'];
        this.dates = ['favorite_createdon'];
        this.booleans = [];
        this.numbers = [];
        
        this.primary = 'favorite_id';
        this.sortcol = 'favorite_createdon';
        this.sortdir = 'desc';
        this.sortorder = 'favorite_createdon desc';
    }

}
export default OfferFavoritesCols;
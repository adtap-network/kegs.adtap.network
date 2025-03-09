import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class OfferPricesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['price_id','price_offer','price_min','price_max','price_btc','price_eur','price_jpy','price_usd','price_xag','price_xau','price_xlm'];
        this.insert = ['price_id','price_offer','price_min','price_max','price_btc','price_eur','price_jpy','price_usd','price_xag','price_xau','price_xlm'];
        this.update = ['price_id','price_offer','price_min','price_max','price_btc','price_eur','price_jpy','price_usd','price_xag','price_xau','price_xlm'];
        this.exact = ['price_id','price_offer','price_min','price_max','price_btc','price_eur','price_jpy','price_usd','price_xag','price_xau','price_xlm'];
        this.search = ['price_id','price_offer','price_min','price_max','price_btc','price_eur','price_jpy','price_usd','price_xag','price_xau','price_xlm'];

        this.guids = ['price_id','price_offer'];
        this.strings = [];
        this.dates = [];
        this.booleans = [];
        this.numbers = ['price_min','price_max','price_btc','price_eur','price_jpy','price_usd','price_xag','price_xau','price_xlm'];
        
        this.primary = 'price_id';
        this.sortcol = 'price_usd';
        this.sortdir = 'desc';
        this.sortorder = 'price_usd desc';
    }

}
export default OfferPricesCols;
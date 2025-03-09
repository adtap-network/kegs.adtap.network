import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class QuotesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['quote_id','quote_xlm','quote_usd','quote_eur','quote_jpy','quote_xau','quote_xag','quote_btc','quote_updatedon'];
        this.insert = ['quote_id','quote_xlm','quote_usd','quote_eur','quote_jpy','quote_xau','quote_xag','quote_btc','quote_updatedon'];
        this.update = ['quote_id','quote_xlm','quote_usd','quote_eur','quote_jpy','quote_xau','quote_xag','quote_btc','quote_updatedon'];
        this.exact = ['quote_id','quote_xlm','quote_usd','quote_eur','quote_jpy','quote_xau','quote_xag','quote_btc','quote_updatedon'];
        this.search = ['quote_id','quote_xlm','quote_usd','quote_eur','quote_jpy','quote_xau','quote_xag','quote_btc','quote_updatedon'];

        this.guids = ['quote_id'];
        this.strings = ['quote_id'];
        this.dates = ['quote_updatedon'];
        this.booleans = [];
        this.numbers = ['quote_xlm','quote_usd','quote_eur','quote_jpy','quote_xau','quote_xag','quote_btc'];
        
        this.primary = 'quote_id';
        this.sortcol = 'quote_updatedon';
        this.sortdir = 'desc';
        this.sortorder = 'quote_updatedon desc';
    }

}
export default QuotesCols;
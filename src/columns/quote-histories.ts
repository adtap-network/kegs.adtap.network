import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class QuoteHistoriesCols extends Columns implements ColumnsInterface {

    constructor() {
        super();
        this.select = ['hist_id','hist_quote','hist_xlm','hist_usd','hist_eur','hist_jpy','hist_xau','hist_xag','hist_btc','hist_updatedon'];
        this.insert = ['hist_id','hist_quote','hist_xlm','hist_usd','hist_eur','hist_jpy','hist_xau','hist_xag','hist_btc','hist_updatedon'];
        this.update = ['hist_id','hist_quote','hist_xlm','hist_usd','hist_eur','hist_jpy','hist_xau','hist_xag','hist_btc','hist_updatedon'];
        this.exact = ['hist_id','hist_quote','hist_xlm','hist_usd','hist_eur','hist_jpy','hist_xau','hist_xag','hist_btc','hist_updatedon'];
        this.search = ['hist_id','hist_quote','hist_xlm','hist_usd','hist_eur','hist_jpy','hist_xau','hist_xag','hist_btc','hist_updatedon'];

        this.guids = ['hist_id','hist_quote'];
        this.strings = [];
        this.dates = ['hist_updatedon'];
        this.booleans = [];
        this.numbers = ['hist_xlm','hist_usd','hist_eur','hist_jpy','hist_xau','hist_xag','hist_btc'];
        
        this.primary = 'hist_id';
        this.sortcol = 'hist_updatedon';
        this.sortdir = 'desc';
        this.sortorder = 'hist_updatedon desc';
    }

}
export default QuoteHistoriesCols;
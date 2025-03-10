import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class InvoicePaymentsCols extends Columns implements ColumnsInterface {
    constructor() {
        super();
        this.select = ['payment_id','payment_invoice','payment_account','payment_intent','payment_coin','payment_network','payment_status','payment_type','payment_action','payment_memo','payment_hash','payment_method','payment_currency','payment_confirmation','payment_amount','payment_price','payment_fee','payment_gas','payment_total','payment_receive','payment_rate','payment_usd','payment_btc','payment_eur','payment_jpy','payment_xlm','payment_xag','payment_xau','payment_date','payment_polledon','payment_updatedon'];
        this.insert = ['payment_id','payment_invoice','payment_account','payment_intent','payment_coin','payment_network','payment_status','payment_type','payment_action','payment_memo','payment_hash','payment_method','payment_currency','payment_confirmation','payment_amount','payment_price','payment_fee','payment_gas','payment_total','payment_receive','payment_rate','payment_usd','payment_btc','payment_eur','payment_jpy','payment_xlm','payment_xag','payment_xau','payment_date','payment_polledon','payment_updatedon'];
        this.update = ['payment_id','payment_invoice','payment_account','payment_intent','payment_coin','payment_network','payment_status','payment_type','payment_action','payment_memo','payment_hash','payment_method','payment_currency','payment_confirmation','payment_amount','payment_price','payment_fee','payment_gas','payment_total','payment_receive','payment_rate','payment_usd','payment_btc','payment_eur','payment_jpy','payment_xlm','payment_xag','payment_xau','payment_date','payment_polledon','payment_updatedon'];
        this.exact = ['payment_id','payment_invoice','payment_account','payment_intent','payment_coin','payment_network','payment_status','payment_type','payment_action','payment_memo','payment_hash','payment_method','payment_currency','payment_confirmation','payment_amount','payment_price','payment_fee','payment_gas','payment_total','payment_receive','payment_rate','payment_usd','payment_btc','payment_eur','payment_jpy','payment_xlm','payment_xag','payment_xau','payment_date','payment_polledon','payment_updatedon'];
        this.search = ['payment_id','payment_invoice','payment_account','payment_intent','payment_coin','payment_network','payment_status','payment_type','payment_action','payment_memo','payment_hash','payment_method','payment_currency','payment_confirmation','payment_amount','payment_price','payment_fee','payment_gas','payment_total','payment_receive','payment_rate','payment_usd','payment_btc','payment_eur','payment_jpy','payment_xlm','payment_xag','payment_xau','payment_date','payment_polledon','payment_updatedon'];

        this.guids = ['payment_id','payment_invoice'];
        this.strings = ['payment_account','payment_intent','payment_coin','payment_network','payment_status','payment_type','payment_action','payment_memo','payment_hash','payment_method','payment_currency','payment_confirmation'];
        this.dates = ['payment_date','payment_polledon','payment_updatedon'];
        this.booleans = [];
        this.numbers = ['payment_amount','payment_price','payment_fee','payment_gas','payment_total','payment_receive','payment_rate','payment_usd','payment_btc','payment_eur','payment_jpy','payment_xlm','payment_xag','payment_xau'];
        
        this.primary = 'payment_id';
        this.sortcol = 'payment_date';
        this.sortdir = 'desc';
        this.sortorder = 'payment_date desc';
    }
}
export default InvoicePaymentsCols;
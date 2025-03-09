import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class InvoicesCols extends Columns implements ColumnsInterface {
    constructor() {
        super();
        this.select = ['invoice_id','invoice_account','invoice_customer','invoice_offer','invoice_status','invoice_number','invoice_memo','invoice_terms','invoice_taxcode','invoice_tracking','invoice_qr','invoice_descr','invoice_subtotal','invoice_tax','invoice_shipping','invoice_handling','invoice_credit','invoice_total','invoice_paid','invoice_senton','invoice_dueon','invoice_paidon','invoice_pickedon','invoice_packedon','invoice_shippedon','invoice_deliveredon'];
        this.insert = ['invoice_id','invoice_account','invoice_customer','invoice_offer','invoice_status','invoice_number','invoice_memo','invoice_terms','invoice_taxcode','invoice_tracking','invoice_qr','invoice_descr','invoice_subtotal','invoice_tax','invoice_shipping','invoice_handling','invoice_credit','invoice_total','invoice_paid','invoice_senton','invoice_dueon','invoice_paidon','invoice_pickedon','invoice_packedon','invoice_shippedon','invoice_deliveredon'];
        this.update = ['invoice_id','invoice_account','invoice_customer','invoice_offer','invoice_status','invoice_number','invoice_memo','invoice_terms','invoice_taxcode','invoice_tracking','invoice_qr','invoice_descr','invoice_subtotal','invoice_tax','invoice_shipping','invoice_handling','invoice_credit','invoice_total','invoice_paid','invoice_senton','invoice_dueon','invoice_paidon','invoice_pickedon','invoice_packedon','invoice_shippedon','invoice_deliveredon'];
        this.exact = ['invoice_id','invoice_account','invoice_customer','invoice_offer','invoice_status','invoice_number','invoice_memo','invoice_terms','invoice_taxcode','invoice_tracking','invoice_qr','invoice_subtotal','invoice_tax','invoice_shipping','invoice_handling','invoice_credit','invoice_total','invoice_paid','invoice_senton','invoice_dueon','invoice_paidon','invoice_pickedon','invoice_packedon','invoice_shippedon','invoice_deliveredon'];
        this.search = ['invoice_id','invoice_account','invoice_customer','invoice_offer','invoice_status','invoice_number','invoice_memo','invoice_terms','invoice_taxcode','invoice_tracking','invoice_qr','invoice_descr','invoice_subtotal','invoice_tax','invoice_shipping','invoice_handling','invoice_credit','invoice_total','invoice_paid','invoice_senton','invoice_dueon','invoice_paidon','invoice_pickedon','invoice_packedon','invoice_shippedon','invoice_deliveredon'];

        this.guids = ['invoice_id'];
        this.strings = ['invoice_account','invoice_customer','invoice_offer','invoice_status','invoice_number','invoice_memo','invoice_terms','invoice_taxcode','invoice_tracking','invoice_qr','invoice_descr'];
        this.dates = ['invoice_senton','invoice_dueon','invoice_paidon','invoice_pickedon','invoice_packedon','invoice_shippedon','invoice_deliveredon'];
        this.booleans = [];
        this.numbers = ['invoice_subtotal','invoice_tax','invoice_shipping','invoice_handling','invoice_credit','invoice_total','invoice_paid'];
        
        this.primary = 'invoice_id';
        this.sortcol = 'invoice_senton';
        this.sortdir = 'desc';
        this.sortorder = 'invoice_senton desc';
    }
}
export default InvoicesCols;
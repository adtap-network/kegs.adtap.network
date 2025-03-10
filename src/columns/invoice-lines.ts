import Columns from '../columns';
import ColumnsInterface from '../interfaces/columns';

class InvoiceLinesCols extends Columns implements ColumnsInterface {
    constructor() {
        super();
        this.select = ['line_id','line_invoice','line_offer','line_type','line_sku','line_qty','line_each','line_ext','line_number','line_addedon'];
        this.insert = ['line_id','line_invoice','line_offer','line_type','line_sku','line_qty','line_each','line_ext','line_number','line_addedon'];
        this.update = ['line_id','line_invoice','line_offer','line_type','line_sku','line_qty','line_each','line_ext','line_number','line_addedon'];
        this.exact = ['line_id','line_invoice','line_offer','line_type','line_sku','line_qty','line_each','line_ext','line_number','line_addedon'];
        this.search = ['line_id','line_invoice','line_offer','line_type','line_sku','line_qty','line_each','line_ext','line_number','line_addedon'];

        this.guids = ['line_id','line_invoice','line_offer'];
        this.strings = ['line_type','line_sku'];
        this.dates = ['line_addedon'];
        this.booleans = [];
        this.numbers = ['line_qty','line_each','line_ext','line_number'];
        
        this.primary = 'line_id';
        this.sortcol = 'line_addedon';
        this.sortdir = 'desc';
        this.sortorder = 'line_addedon desc';
    }
}
export default InvoiceLinesCols;
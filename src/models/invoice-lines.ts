import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { InvoiceLinesSchema } from '../schemas/invoice-lines';
import InvoiceLinesCols from '../columns/invoice-lines';

class InvoiceLinesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblinvoice_lines',
            '',
            'a',
            InvoiceLinesSchema,
            new InvoiceLinesCols()
        );
    }
    
}
export default InvoiceLinesModel;
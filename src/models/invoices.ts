import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { InvoicesSchema } from '../schemas/invoices';
import InvoicesCols from '../columns/invoices';

class InvoicesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblinvoices',
            '',
            'a',
            InvoicesSchema,
            new InvoicesCols()
        );
    }
    
}
export default InvoicesModel;
import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { InvoicePaymentsSchema } from '../schemas/invoice-payments';
import InvoicePaymentsCols from '../columns/invoice-payments';

class InvoicePaymentsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblinvoice_notices',
            '',
            'a',
            InvoicePaymentsSchema,
            new InvoicePaymentsCols()
        );
    }
    
}
export default InvoicePaymentsModel;
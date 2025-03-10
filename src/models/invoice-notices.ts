import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { InvoiceNoticesSchema } from '../schemas/invoice-notices';
import InvoiceNoticesCols from '../columns/invoice-notices';

class InvoiceNoticesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblinvoice_notices',
            '',
            'a',
            InvoiceNoticesSchema,
            new InvoiceNoticesCols()
        );
    }
    
}
export default InvoiceNoticesModel;
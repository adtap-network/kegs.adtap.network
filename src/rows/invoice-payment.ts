import Row from '../row';
import RowInterface from '../interfaces/row';
import { InvoicePaymentsSchema } from '../schemas/invoice-payments';

export default class InvoicePaymentRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = InvoicePaymentsSchema.validate(input);
        return validation;
    }

}
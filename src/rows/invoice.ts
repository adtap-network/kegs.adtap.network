import Row from '../row';
import RowInterface from '../interfaces/row';
import { InvoicesSchema } from '../schemas/invoices';

export default class InvoiceRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('invoice'); }

    validateInput(input: any): boolean {
        const validation = InvoicesSchema.validate(input);
        return validation;
    }

}
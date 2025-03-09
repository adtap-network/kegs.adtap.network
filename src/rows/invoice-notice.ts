import Row from '../row';
import RowInterface from '../interfaces/row';
import { InvoiceNoticesSchema } from '../schemas/invoice-notices';

export default class InvoiceNoticeRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = InvoiceNoticesSchema.validate(input);
        return validation;
    }

}
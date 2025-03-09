import { Row, RowInterface } from "bns.adtap.network";
import { InvoiceLinesSchema } from '../schemas/invoice-lines';

export class InvoiceLineRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = InvoiceLinesSchema.validate(input);
        return validation;
    }

}
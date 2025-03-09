import { Row, RowInterface} from "bns.adtap.network";
import { InvoicesSchema } from '../schemas/invoices';

export class InvoiceRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('invoice'); }

    validateInput(input: any): boolean {
        const validation = InvoicesSchema.validate(input);
        return validation;
    }

}
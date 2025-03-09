import Row from '../row';
import RowInterface from '../interfaces/row';
import { QuotesSchema } from '../schemas/quotes';

export class QuoteRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = QuotesSchema.validate(input);
        return validation;
    }

}
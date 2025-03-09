import { Row, RowInterface } from "bns.adtap.network";
import { QuoteHistoriesSchema } from '../schemas/quote-histories';

export class QuoteHistoryRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = QuoteHistoriesSchema.validate(input);
        return validation;
    }

}
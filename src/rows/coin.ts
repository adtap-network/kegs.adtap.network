import { Row, RowInterface } from "bns.adtap.network";
import { CoinsSchema } from '../schemas/coins';

export class CoinRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = CoinsSchema.validate(input);
        return validation;
    }

}
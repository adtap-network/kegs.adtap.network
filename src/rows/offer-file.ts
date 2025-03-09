import { Row, RowInterface } from "bns.adtap.network";
import { OfferFilesSchema } from '../schemas/offer-files';

export class OfferFileRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferFilesSchema.validate(input);
        return validation;
    }
}
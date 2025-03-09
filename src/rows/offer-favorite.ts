import { Row, RowInterface } from "bns.adtap.network";
import { OfferFavoritesSchema } from '../schemas/offer-favorites';

export class OfferFavoriteRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferFavoritesSchema.validate(input);
        return validation;
    }

}
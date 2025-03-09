import Row from '../row';
import RowInterface from '../interfaces/row';
import { OfferFavoritesSchema } from '../schemas/offer-favorites';

export default class OfferFavoriteRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = OfferFavoritesSchema.validate(input);
        return validation;
    }

}
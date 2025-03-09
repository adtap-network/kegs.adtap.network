import { Row, RowInterface } from "bns.adtap.network";
import { EntryFavoritesSchema } from '../schemas/entry-favorites';

export class EntryFavoriteRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryFavoritesSchema.validate(input);
        return validation;
    }

}
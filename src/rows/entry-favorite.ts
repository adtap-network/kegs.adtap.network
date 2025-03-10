import Row from '../row';
import RowInterface from '../interfaces/row';
import { EntryFavoritesSchema } from '../schemas/entry-favorites';

export default class EntryFavoriteRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = EntryFavoritesSchema.validate(input);
        return validation;
    }

}
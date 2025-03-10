import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { EntryFavoritesSchema } from '../schemas/entry-favorites';
import EntryFavoritesCols from '../columns/entry-favorites';

class EntryFavoritesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblentry_favorites',
            '',
            'a',
            EntryFavoritesSchema,
            new EntryFavoritesCols()
        );
    }
    
}
export default EntryFavoritesModel;
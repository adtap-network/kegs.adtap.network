import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OfferFavoritesSchema } from '../schemas/offer-favorites';
import OfferFavoritesCols from '../columns/offer-favorites';

class OfferFavoritesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbloffer_favorites',
            '',
            'a',
            OfferFavoritesSchema,
            new OfferFavoritesCols()
        );
    }
    
}
export default OfferFavoritesModel;
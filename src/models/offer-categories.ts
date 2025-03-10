import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OfferCategoriesSchema } from '../schemas/offer-categories';
import OfferCategoriesCols from '../columns/offer-categories';

class OfferCategoriesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbloffer_categories',
            '',
            'a',
            OfferCategoriesSchema,
            new OfferCategoriesCols()
        );
    }    
}
export default OfferCategoriesModel;
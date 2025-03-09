import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OfferViewsSchema } from '../schemas/offer-views';
import OfferViewsCols from '../columns/offer-views';

class OfferViewsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbloffer_views',
            '',
            'a',
            OfferViewsSchema,
            new OfferViewsCols()
        );
    }
    
}
export default OfferViewsModel;
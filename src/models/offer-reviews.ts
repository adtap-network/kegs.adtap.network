import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OfferReviewsSchema } from '../schemas/offer-reviews';
import OfferReviewsCols from '../columns/offer-reviews';

class OfferReviewsModel extends CommonModel implements CommonModelInterface {
    constructor() { 
        super(
            'tbloffer_reviews',
            '',
            'a',
            OfferReviewsSchema,
            new OfferReviewsCols()
        );
    }    
}
export default OfferReviewsModel;
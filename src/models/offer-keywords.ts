import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OfferKeywordsSchema } from '../schemas/offer-keywords';
import OfferKeywordsCols from '../columns/offer-keywords';

class OfferKeywordsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbloffer_keywords',
            '',
            'a',
            OfferKeywordsSchema,
            new OfferKeywordsCols()
        );
    }
    
}
export default OfferKeywordsModel;
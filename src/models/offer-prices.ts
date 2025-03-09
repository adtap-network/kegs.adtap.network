import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OfferPricesSchema } from '../schemas/offer-prices';
import OfferPricesCols from '../columns/offer-prices';

class OfferPricesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbloffer_prices',
            '',
            'a',
            OfferPricesSchema,
            new OfferPricesCols()
        );
    }
    
}
export default OfferPricesModel;
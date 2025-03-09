import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OfferOptionsSchema } from '../schemas/offer-options';
import OfferOptionsCols from '../columns/offer-options';

class OfferOptionsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbloffer_options',
            '',
            'a',
            OfferOptionsSchema,
            new OfferOptionsCols()
        );
    }
    
}
export default OfferOptionsModel;
import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OfferValuesSchema } from '../schemas/offer-values';
import OfferValuesCols from '../columns/offer-values';

class OfferValuesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbloffer_values',
            '',
            'a',
            OfferValuesSchema,
            new OfferValuesCols()
        );
    }
    
}
export default OfferValuesModel;
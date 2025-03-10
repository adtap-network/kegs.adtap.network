import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OfferFieldsSchema } from '../schemas/offer-fields';
import OfferFieldsCols from '../columns/offer-fields';

class OfferFieldsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbloffer_fields',
            '',
            'a',
            OfferFieldsSchema,
            new OfferFieldsCols()
        );
    }
    
}
export default OfferFieldsModel;
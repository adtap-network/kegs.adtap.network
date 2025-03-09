import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OffersSchema } from '../schemas/offers';
import OffersCols from '../columns/offers';


class OffersModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbloffers',
            '',
            'a',
            OffersSchema,
            new OffersCols()
        );
    }
    
}
export default OffersModel;
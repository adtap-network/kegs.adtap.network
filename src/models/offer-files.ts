import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { OfferFilesSchema } from '../schemas/offer-files';
import OfferFilesCols from '../columns/offer-files';

class OfferFilesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbloffer_files',
            '',
            'a',
            OfferFilesSchema,
            new OfferFilesCols()
        );
    }
    
}
export default OfferFilesModel;
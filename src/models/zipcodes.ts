import CommonModel from '../settings/model';
import CommonModelInterface from '../../../common/interfaces/model';
import { ZipcodesSchema } from '../schemas/zipcodes';
import ZipcodesCols from '../columns/zipcodes';

class ZipcodesModel extends CommonModel implements CommonModelInterface {
    constructor() { 
        super(
            'tblzipcodes',
            '',
            'a',
            ZipcodesSchema,
            new ZipcodesCols()
        );
    }    
}
export default ZipcodesModel;
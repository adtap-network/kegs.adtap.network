import Model from '../model';
import ModelInterface from '../interfaces/model';
import { ZipcodesSchema } from '../schemas/zipcodes';
import ZipcodesCols from '../columns/zipcodes';

class ZipcodesModel extends Model implements ModelInterface {
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
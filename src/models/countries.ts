import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { CountriesSchema } from '../schemas/countries';
import CountriesCols from '../columns/countries';

class CountriesModel extends CommonModel implements CommonModelInterface {
    constructor() { 
        super(
            'tblcountries',
            '',
            'a',
            CountriesSchema,
            new CountriesCols()
        );    
    }
    
}
export default CountriesModel;
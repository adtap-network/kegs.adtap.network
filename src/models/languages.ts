import CommonModel from '../model';
import { LanguagesSchema } from '../schemas/languages';
import LanguagesCols from '../columns/languages';
import CommonModelInterface from '../../../common/interfaces/model';

class LanguagesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbllanguages',
            '',
            'a',
            LanguagesSchema,
            new LanguagesCols()
        );
    }
    
}
export default LanguagesModel;
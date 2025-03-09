import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { QuoteHistoriesSchema } from '../schemas/quote-histories';
import QuoteHistoriesCols from '../columns/quote-histories';

class QuoteHistoriesModel extends CommonModel implements CommonModelInterface {
    constructor() { 
        super(
            'tblquote_histories',
            '',
            'a',
            QuoteHistoriesSchema,
            new QuoteHistoriesCols()
        );
    }    
}
export default QuoteHistoriesModel;
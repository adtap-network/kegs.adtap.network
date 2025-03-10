import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { QuotesSchema } from '../schemas/quotes';
import QuotesCols from '../columns/quotes';

class QuotesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblquotes',
            '',
            'a',
            QuotesSchema,
            new QuotesCols()
        );
    }
    
}
export default QuotesModel;
import CommonModel from '../model';
import { CoinsSchema } from '../schemas/coins';
import CoinsCols from '../columns/coins';
import CommonModelInterface from '../../../common/interfaces/model';

class CoinsModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblcoins',
            '',
            'a',
            CoinsSchema,
            new CoinsCols()
        );
    }
    
}
export default CoinsModel
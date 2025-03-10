import Service from "../service";
import ContextInterface from "../interfaces/context";
import CoinsModel from "../models/coins";

class CoinsService extends Service {

    constructor(context: ContextInterface) {
        super(context, new CoinsModel());
    }

}
export default CoinsService;
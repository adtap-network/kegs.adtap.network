import Service from "../service";
import ContextInterface from "../interfaces/context";
import LanguagesModel from "../models/languages";

class LanguagesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new LanguagesModel());
    }

}
export default LanguagesService;
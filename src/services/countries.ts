import Service from "../service";
import ContextInterface from "../interfaces/context";
import CountriesModel from "../models/countries";

class CountriesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new CountriesModel());
    }

}
export default CountriesService;
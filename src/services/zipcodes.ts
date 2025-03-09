import Service from "../service";
import ContextInterface from "../interfaces/context";
import ZipcodesModel from "../models/zipcodes";

class ZipcodesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new ZipcodesModel());
    }

}
export default ZipcodesService;
import Service from "../service";
import ContextInterface from "../interfaces/context";
import TimezonesModel from "../models/timezones";

class TimezonesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new TimezonesModel());
    }

}
export default TimezonesService;
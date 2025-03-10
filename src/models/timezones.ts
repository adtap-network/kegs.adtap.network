import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { TimezonesSchema } from '../schemas/timezones';
import TimeZonesCols from '../columns/timezones';

class TimezonesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tbltimezones',
            '',
            'a',
            TimezonesSchema,
            new TimeZonesCols()
        );
    }
    
}
export default TimezonesModel;
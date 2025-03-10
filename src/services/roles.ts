import Service from "../service";
import ContextInterface from "../interfaces/context";
import RolesModel from "../models/roles";

class RolesService extends Service {

    constructor(context: ContextInterface) {
        super(context, new RolesModel());
    }

}
export default RolesService;
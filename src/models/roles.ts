import CommonModel from '../model';
import CommonModelInterface from '../../../common/interfaces/model';
import { RolesSchema } from '../schemas/roles';
import RolesCols from '../columns/roles';

class RolesModel extends CommonModel implements CommonModelInterface {

    constructor() { 
        super(
            'tblroles',
            '',
            'a',
            RolesSchema,
            new RolesCols()
        );
    }
    
}
export default RolesModel;
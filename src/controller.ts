import CommonBean from "./bean";
import ControllerInterface from "./interfaces/controller";
import BeanErrors from "./beans/errors";
import ErrorsInterface from "./interfaces/errors";
import BeanFilters from "./beans/filters";
import FiltersInterface from "./interfaces/filters";
import BeanJson from "./beans/json";
import JsonInterface from "./interfaces/json";
import BeanMessage from "./beans/message";
import MessageInterface from "./interfaces/message";
import BeanParams from "./beans/params";
import ParamsInterface from "./interfaces/params";

export default class CommonController extends CommonBean implements ControllerInterface {

    attempted: string               = "";
    content: string 				= "";
    deciphered: string				= "";
    domain: string					= "";
    errors: ErrorsInterface 	    = new BeanErrors();
    filters: FiltersInterface 		= new BeanFilters();
    json: JsonInterface 			= new BeanJson();
    mail: MessageInterface			= new BeanMessage();
    params: ParamsInterface 		= new BeanParams();
    port: number					= 443;
    services: {[key: string]: any}  = {};
    uploads: {[key: string]: any} 	= {};

    constructor() {
        super({});
    }



}
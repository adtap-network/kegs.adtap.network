import Bean from "./bean";
import ControllerInterface from "./interfaces/controller";
import ErrorsBean from "./beans/errors";
import ErrorsInterface from "./interfaces/errors";
import FiltersBean from "./beans/filters";
import FiltersInterface from "./interfaces/filters";
import JsonBean from "./beans/json";
import JsonInterface from "./interfaces/json";
import MessageBean from "./beans/message";
import MessageInterface from "./interfaces/message";
import ParamsBean from "./beans/params";
import ParamsInterface from "./interfaces/params";

export default class Controller extends Bean implements ControllerInterface {

    attempted: string               = "";
    content: string 				= "";
    deciphered: string				= "";
    domain: string					= "";
    errors: ErrorsInterface 	    = new ErrorsBean();
    filters: FiltersInterface 		= new FiltersBean();
    json: JsonInterface 			= new JsonBean();
    mail: MessageInterface			= new MessageBean();
    params: ParamsInterface 		= new ParamsBean();
    port: number					= 443;
    services: {[key: string]: any}  = {};
    uploads: {[key: string]: any} 	= {};

    constructor() {
        super({});
    }



}
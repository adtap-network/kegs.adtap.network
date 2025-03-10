import Base from "../base";

export default class JsonBean extends Base {

    statuscode: number              = 200;
    message: string                 = '';
    data: {[key: string]: any}      = {};
	error: boolean			        = false;
	code: string			        = '';

    constructor() { super(); }
    
}
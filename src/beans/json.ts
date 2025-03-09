import Bean from "../bean";

export default class JsonBean extends Bean {

    statuscode: number              = 200;
    message: string                 = '';
    data: {[key: string]: any}      = {};
	error: boolean			        = false;
	code: string			        = '';

    constructor() { super(); }
    
}
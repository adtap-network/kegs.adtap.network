import Base from "../base";
import Fault from "../fault";
import ErrorsInterface from "../interfaces/errors";
import FaultInterface from "../interfaces/fault";

export default class ErrorsBean extends Base implements ErrorsInterface {

    admin: boolean = false;
    codes: {[key: string]: {[key: string]: string}} = {
        c001: {code: 'c001', type: "error", message: "unable to connect to remote host."},
        c002: {code: 'c002', type: "error", message: "unable to connect to webnative server."},
        c003: {code: 'c003', type: "error", message: "unable to connect to the mysql database."},
        c004: {code: 'c004', type: "error", message: "unable to connect to the gmg cozone api."},
        c005: {code: 'c005', type: "error", message: "unable to verify identity of host (ssl handshake failed)."}
    };
    counter: number = 0;
    dump: boolean = true;
    errors: {}[] = [];
    settings: {[key: string]: string} = {filename: 'rocket.log', directory: 'D:\\Inetpub\\media\\logs', filepath: 'D:\\Inetpub\\media\\logs\\rocket.log'};

    constructor() { super({}); }

    addError(error: {}) { this.errors.push(error); }

    clearErrors() { this.errors = []; this.resetCounter(); }

    createError(code: string, file: string, func: string, msg: string) {
		let e = new Fault();
		e.error_code = code;
		e.error_file = file;
		e.error_function = func;
		if(this.isSet(this.codes, code)) {
			let h = this.codes[code];
			e.error_message = h.message;
			e.error_type = h.type;
		}
		else { e.error_message = msg; }
		return e;
	}

    createLog() { 
        let content = 'date,type,file,function,message' + String.fromCharCode(10); 
        this.writeFile(this.settings.filepath, content); 
    }

    decrementCounter() { if(this.counter > 0) { this.counter--; } }

    getCurrentError() { return this.getError(this.counter); }

    getError(index: number) { let e = {}; if(index <= this.getErrorCount()) { let e = this.errors[index]; } return e; }
    
    getErrorCount() { return this.errors.length; }

    getErrors() { return this.errors; }

    getSettings(): {[key: string]: string} { return this.settings; }

    incrementCounter() { this.counter++; }

    logException(e: Error, file: string, func: string, type: string='error', dump: boolean=true): void {
        const msg = e.message;
        let c = this.getLog();
        c += this.getDateNow() + ',' + type + ',' + file + ',' + func + ',' + msg.replace(/,/g, '') + String.fromCharCode(10);
        this.writeFile(this.settings.filepath, c);
        if(dump == true) { this.dumpException(msg, file, func, type); }
	}

    nextError() { let e = this.getCurrentError(); this.incrementCounter(); return e; }

    previousError() { this.decrementCounter(); return this.getCurrentError(); }

    resetCounter() { this.counter = 0; }

    setSettings(settings: {[key: string]: string}): void { this.settings = settings; }

}
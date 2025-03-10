import Base from './base'

class Fault extends Base {
	code: string = "";
	date: string;
	file: string = "";
	func: string = "";
	logfile: string = "error.log";
	message: string = "";
	type: string = "error";
  
	constructor() { super(); this.date = this.getDateNow(); }
}

export default Fault;
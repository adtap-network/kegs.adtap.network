import Bean from '../bean';
import FiltersBean from '../beans/filters';
import FiltersInterface from '../interfaces/filters';

export default class QueryBean extends Bean {

    row: {[key: string]: any}				= {};
    rows: {[key: string]: any}[]			= [];
    recordcount: number          			= 0;
    filters: FiltersInterface				= new FiltersBean();
    sql: string 							= '';
    menus: {[key: string]: any} 			= {};
    columns: {[key: string]: any}[]			= [];

    constructor() { super({}); }

    calculateRecordcount(): void { this.recordcount = this.rows.length; }

    setSail(s: {[key: string]: any}): void {
		if(s.hasProperty('filters')) { this.filters.mergeProperties(s.filters); }
		if(s.hasProperty('rows')) { this.setRows(s.rows); }
	}

	setRows(a: {[key: string]: any}[]): void {
		this.rows = a;
		this.calculateRecordcount();
	}

}
import Base from './base';
import AccountBean from './beans/account';
import AdapterInterface from './interfaces/adapter';
import ModelInterface from './interfaces/model';
import BaseInterface from './interfaces/base';
import ContextInterface from './interfaces/context';
import MysqlAdapter from "./adapters/my";
import PgAdapter from "./adapters/pg";
import RowInterface from "./interfaces/row";

export default class Service extends Base {

    adapter: AdapterInterface;
    context: ContextInterface;

    constructor(context: ContextInterface, model: ModelInterface) { 
        super({}); 
        this.context = context;
        if(this.context.datastore == 'my') { this.adapter = new MysqlAdapter(this.context.datasources.my.adtap, model); }
        else { this.adapter = new PgAdapter(this.context.datasources.pg.adtap, model); }
    }

    deleteRecord(id: string) {  let r = this.adapter.getRow(id); this.adapter.deleteRow(id); return r; }

    getRecord(id: string): RowInterface { return this.adapter.getRow(id); }

    listRecords() { return this.adapter.listRows(); }

    listRecordsByParams(params: object) { return this.adapter.listRowsByParams(params); }

    newRecord(params: BaseInterface): RowInterface { return this.adapter.newRecord(params); }

    saveRecord(params: object) { let i = this.adapter.saveRow(params); let r = this.adapter.getRow(i); return r; }

    searchRecords(params: object) { return this.adapter.searchRows(params); }

}
import Base from './base';
import Bean from './bean';
import BaseInterface from './interfaces/base';
import ModelInterface from './interfaces/model';
import DatasourceInterface from './interfaces/datasource';

class Adapter extends Bean {

    datasource: DatasourceInterface;
    model: ModelInterface;
    debugging: boolean = false;

    constructor(datasource: DatasourceInterface, model: ModelInterface) { 
        super({});
        this.datasource = datasource;
        this.datasource.decryptPassword();
        this.model = model;
    }

    bail(message: string, code: string) { return; }

    buildQuery(f: {[key: string]: any}, t: string) { return ''; }

    buildCountClause(f: {[key: string]: any}) { return ''; }

    buildCountQuery(f: {[key: string]: any}) { return ''; }

    buildDeleteQuery(f: { [key: string]: any }) { return ''; }

    buildInsertQuery(f: {[key: string]: any}) { return ''; }
    
    buildLimitClause(f: {[key: string]: any}) { return ''; }

    buildOrderbyClause(f: {[key: string]: any}) { return ''; }

    buildSelectClause(f: {[key: string]: any}) { return ''; }

    buildSelectQuery(f: {[key: string]: any}) { return ''; }

    buildUpdateQuery(f: {[key: string]: any}) { return ''; }

    buildWhereClause(f: {[key: string]: any}) { return ''; }

    callProcedure(name: string, params: string[]) { return {}; }

    columnAlias(k: string) { return ''; }

    columnList(o: {[key: string]: any}) { return ''; }

    connect() { return; }

    countRows()  { return 0; }

    deleteAll() { return; }

    deleteRowByKey(key: string, value: string) { return; }

    deleteRowByParams(params: {[key: string]: any}) { return; }

    deleteRow(id: string) { return; }

    escapeColumn(name: string) { return ''; }

    escapeDbString(t: string) { return ''; }

    flushData() { return; }

    getColumn(q: {[key: string]: any}, x: number) { return {}; }

    getColumnAlias(k: string) { return ''; }

    getColumnInfo(type: string, offset: number) { return {}; }

    getColumnPrefix(k: string) { return ''; }

    getColumnSchema(k: string) { return ''; }

    getColumnSelector(k: string) { return ''; }

    getColumnTable(k: string) { return ''; }

    getDbPath(path: string) { return ''; }

    getDotColumnPrefix(k: string) { return ''; }

    getIdByKey(k: string, v: string) { return ''; }

    getLatestRow() { return {}; }

    getMaxSort(k: string, v: string) { return 0; }

    getPrimaryKey() { return ''; }

    getPrimaryValue() { return ''; }

    getResults(q: string) { return {}; }

    getRow(i: string) { let k = this.model.cols.primary; return this.getRowByParams({[k]: i}); }

    getRowByKey(k: string, v: string) { return this.getRowByParams({[k]: v}); }

    getRowByParams(p: {[key: string]: any}) { return {}; }

    getSaveAction(r: {[key: string]: any}) { return ''; }

    hideErrors() { return; }

    insertRecord(r: {[key: string]: any}) { return ''; }

    listRows() { return {}; }

    listKeyRows(k: string, v: string) { return {}; }

    listRowsByParams(p: {[key: string]: any}) { return {}; }

    listTopRows(n: number) { return {}; }

    loadDdl() { return; }

    mergeMenus(m: {[key: string]: any}) { return {}; }

    newFilters(p: BaseInterface) { 
        let f = new Base();
		if(p.hasProperty('sortcol') && p.getPropertyValue('sortcol') != '') { 
            f.setPropertyValue('sortcol', p.getPropertyValue('sortcol')); 
        } 
        else { 
            f.setPropertyValue('sortcol', this.model.cols.sortcol); 
        }
		
        if(p.hasProperty('sortdir') && this.arrayContains(['ASC','DESC'], this.ucase(p.getPropertyValue('sortdir')))) { 
            f.setPropertyValue('sortdir', p.getPropertyValue('sortdir')); 
        } 
        else { 
            f.setPropertyValue('sortdir', this.model.cols.sortdir); 
        }

		if(this.ucase(f.this.getPropertyValue('sortdir')) == 'ASC') { 
            f.setPropertyValue('newdir', 'DESC'); 
        }
        else { 
            f.setPropertyValue('newdir', 'ASC'); 
        }

        for(let i=0; i<this.model.cols.all.length; i++) {
            let x = this.model.cols.all[i];
            if(!f.hasProperty(x)) { f.setPropertyValue(x, ''); }
        }
        Object.keys(p).forEach(k => {
            const v = p.getPropertyValue(k);
            if(f.hasProperty(k) && !this.arrayContains(['sortcol','sortdir'], k)) {
                if(!this.isArray(v)) { f.setPropertyValue(k, v); }
                else if(this.arrayContains([this.model.cols.keyin, this.model.cols.keyout], k)) {
                    f.setPropertyValue(k, v);
                }
            }
        });

        if(p.hasProperty('form_id') && p.getPropertyValue('form_id') != '') {
            f.setPropertyValue('form_id', p.getPropertyValue('form_id'));
        }
        if(p.hasProperty('keywords') && !this.isArray(p.getPropertyValue('keywords')) && p.getPropertyValue('keywords') != '') {
            f.setPropertyValue('keywords', p.getPropertyValue('keywords'));
        }

        if(f.hasProperty(this.model.cols.primary)) {
            if(f.getPropertyValue(this.model.cols.primary) == 0 || f.getPropertyValue(this.model.cols.primary) == '') {
                delete f[this.model.cols.primary];
            }
        }
    	return f;
    }

    newRecord(p: BaseInterface) { 
        let r = new Base();
        for(let i=0; i<this.model.cols.select.length; i++) {
            let x = this.model.cols.select[i];
			if(this.arrayContains(this.model.cols.dates, x)) { r.setPropertyValue(x, this.getDateNow()); }
			else if(x != this.model.cols.primary && this.arrayContains(this.model.cols.numbers, x)) { r.setPropertyValue(x, 0); }
			else if(this.arrayContains(this.model.cols.booleans, x)) { r.setPropertyValue(x, false); }
			else { r.setPropertyValue(x, ''); }
			if(p.hasProperty(x)) { 
                if(p.hasProperty('mode') && p.getPropertyValue('mode') == 'json' && p.getPropertyValue(x) != '') { 
                    r.setPropertyValue(x, decodeURIComponent(p.getPropertyValue(x))); 
                } 
                else { r.setPropertyValue(x, p.getPropertyValue(x)); } 
            }
		}
		return r;
    }

    realEscape(s: string) { return ''; }

    reorderRows() { return; }

    rowExists(id: string) { return false; }

    rowExistsByParams(p: {[key: string]: any}) { return false; }

    rowExistsByKey(k: string, v: string) { return false; }

    sanitizeRow(r: {[key: string]: any}) { return {}; }

    saveRow(r: {[key: string]: any}) { return ''; }

    searchRows(r: {[key: string]: any}) { return {}; }

    searchRowsProc(r: {[key: string]: any}) { return {}; }

    searchRowsSql(r: {[key: string]: any}) { return {}; }

    select(db: string) { return; }

    setAllColumns() { return; }

    setCharset(charset: string, collate: string) { return; }

    setDatasource(datasource: DatasourceInterface) { return; }

    setSortOrder(column: string, order: string) { return; }

    showErrors() { return; }

    sortDown(key: string){ return 0; }

    sortUp(key: string) { return 0; }

    updateRow(r: {[key: string]: any}) { return {}; }
}
export default Adapter;
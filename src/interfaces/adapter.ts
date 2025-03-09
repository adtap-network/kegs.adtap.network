import BeanInterface from './bean';
import DatasourceInterface from './datasource';
import ModelInterface from './model';

export default interface AdapterInterface extends BeanInterface {

    datasource: DatasourceInterface;
    model: ModelInterface;
    debugging: boolean;

    bail(message: string, code: string): void;

    buildQuery(f: {[key: string]: any}, t: string): string;

    buildCountClause(f: {[key: string]: any}): string;

    buildCountQuery(f: {[key: string]: any}): string;

    buildDeleteQuery(f: {[key: string]: any}): string

    buildInsertQuery(f: {[key: string]: any}): string;
    
    buildLimitClause(f: {[key: string]: any}): string;

    buildOrderbyClause(f: {[key: string]: any}): string;

    buildSelectClause(f: {[key: string]: any}): string;

    buildSelectQuery(f: {[key: string]: any}): string;

    buildUpdateQuery(f: {[key: string]: any}): string;

    buildWhereClause(f: {[key: string]: any}): string;

    callProcedure(name: string, params: {[key: string]: any}): {[key: string]: any};

    columnAlias(k: string): string;

    columnList(o: {[key: string]: any}): string;

    connect(): void;

    countRows(): number;

    deleteAll(): void;

    deleteRowByKey(key: string, value: string): void;

    deleteRowByParams(params: {[key: string]: any}): void;

    deleteRow(id: string): void;

    escapeColumn(name: string): string;

    escapeDbString(t: string): string;

    flushData(): void;

    getColumn(q: {[key: string]: any}, x: number): {[key: string]: any};

    getColumnAlias(k: string): string;

    getColumnInfo(type: string, offset: number): {[key: string]: any};

    getColumnPrefix(k: string): string;

    getColumnSchema(k: string): string;

    getColumnSelector(k: string): string;

    getColumnTable(k: string): string;

    getDbPath(path: string): string;

    getDotColumnPrefix(k: string): string;

    getIdByKey(k: string, v: string): string;

    getLatestRow(): {[key: string]: any};

    getMaxSort(k: string, v: string): number;

    getPrimaryKey(): string;

    getPrimaryValue(): string;

    getResults(q: string): {[key: string]: any};

    getRow(i: string): {[key: string]: any};

    getRowByKey(k: string, v: string): {[key: string]: any};

    getRowByParams(p: {[key: string]: any}): {[key: string]: any};

    getSaveAction(r: {[key: string]: any}): string;

    hideErrors(): void;

    insertRecord(r: object): string;

    listRows(): {[key: string]: any};

    listKeyRows(k: string, v: string): {[key: string]: any};

    listRowsByParams(p: {[key: string]: any}): {[key: string]: any};

    listTopRows(n: number): {[key: string]: any};

    loadDdl(): void;

    mergeMenus(m: {[key: string]: any}): {[key: string]: any};

    newFilters(p: {[key: string]: any}): {[key: string]: any};

    newRecord(p: {[key: string]: any}): {[key: string]: any};

    realEscape(s: string): string;

    reorderRows(): void;

    rowExists(id: string): boolean;

    rowExistsByParams(p: {[key: string]: any}): boolean;

    rowExistsByKey(k: string, v: string): boolean;

    sanitizeRow(r: {[key: string]: any}): {[key: string]: any};

    saveRow(r: {[key: string]: any}): string;

    searchRows(r: {[key: string]: any}): {[key: string]: any};

    searchRowsProc(r: {[key: string]: any}): {[key: string]: any};

    searchRowsSql(r: {[key: string]: any}): {[key: string]: any};

    select(db: string): void;

    setAllColumns(): void;

    setCharset(charset: string, collate: string): void;

    setDatasource(datasource: DatasourceInterface): void;

    setSortOrder(column: string, order: string): void;

    showErrors(): void;

    sortDown(key: string): void;

    sortUp(key: string): void;

    updateRow(r: object): {[key: string]: any};

}
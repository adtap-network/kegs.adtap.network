import BaseInterface from "../interfaces/base";
import FiltersInterface from '../interfaces/filters';

export default interface QueryInterface extends BaseInterface {

    row: {[key: string]: any};
    rows: {[key: string]: any}[];
    recordcount: number;
    filters: FiltersInterface;
    sql: string;
    menus: {[key: string]: any};
    columns: {[key: string]: any}[];

    calculateRecordcount(): void;

    setSail(s: {[key: string]: any}): void;

	setRows(a: {[key: string]: any}[]): void;

}
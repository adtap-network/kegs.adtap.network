export interface ColumnsInterface {
    select: string[];
    insert: string[];
    update: string[];
    exact: string[];
    search: string[];
    guids: string[];
    numbers: string[];
    dates: string[];
    booleans: string[];
    strings: string[];
    primary: string;
    sortcol: string;
    sortdir: string;
    sortorder: string;
}
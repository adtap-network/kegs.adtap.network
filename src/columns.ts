import Bean from './bean';
import ColumnsInterface from './interfaces/columns';

export default class Columns extends Bean implements ColumnsInterface {

    select: string[]                        = [];
    insert: string[]                        = [];
    update: string[]                        = [];
    exact: string[]                         = [];
    search: string[]                        = [];
    guids: string[]                         = [];
    numbers: string[]                       = [];
    dates: string[]                         = [];
    booleans: string[]                      = [];
    strings: string[]                       = [];
    primary: string                         = '';
    sortcol: string                         = '';
    sortdir: string                         = 'asc';
    sortorder: string                       = '';
    aliases: {[key: string]: any}           = {};

    constructor() { super(); }    
}
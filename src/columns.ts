import Base from './base';
import ColumnsInterface from './interfaces/columns';

export default class Columns extends Base implements ColumnsInterface {

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
    all: string[]                           = [];
    keyin: string                           = '';
    keyout: string                          = '';

    constructor() { super(); }    
}
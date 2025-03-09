import Bean from "../bean";
import FiltersBean from '../beans/filters';
import FiltersInterface from '../interfaces/filters';

export default class ParamsBean extends Bean {

    filters: FiltersInterface       = new FiltersBean();
    action: string                  = ''; 
    card: string                    = 'catalog'; 
    error: boolean                  = false; 
    formId: string                  = ''; 
    mode: string                    = 'skin'; 
    search: boolean                 = false; 
    route: string                   = '';
    endpoint: string                = '';
    tab: number                     = 1; 
    tabindex: number                = 1; 
    validation: boolean             = false; 
    task: string                    = 'home_unknown'; 
    nonce: number                   = 0;
    format: string                  = ''; 
    secret: string                  = ''; 
    keywords: string                = ''; 
    logout: boolean                 = false; 
    crypt: string                   = '';

    constructor() { super({}); }

}
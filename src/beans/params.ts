import Base from "../base";
import FiltersBean from '../beans/filters';
import FiltersInterface from '../interfaces/filters';
import { Request } from "express";

export default class ParamsBean extends Base {

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

    setParams(req: Request): void {
        let gs = Object.keys(req.query);
        for(let i=0; i<gs.length; i++) {
            let gk = gs[i];
            let gv = req.query[gk];
            this.setPropertyValue(gk, gv);
        }
        let ps = Object.keys(req.body);
        for(let j=0; j<ps.length; j++) {
            let pk = ps[j];
            let pv = req.body[pk];
            this.setPropertyValue(pk, pv);
        }
    }

}
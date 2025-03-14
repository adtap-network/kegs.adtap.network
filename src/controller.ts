import Base from './base';
import Context from './context';
import ContextInterface from './interfaces/context';
import { ViewClasses } from './exports/views';
import express, { Request, Response } from "express";


export default class Controller extends Base {

    content: string = '';
    context: ContextInterface;
    domain: string = '';
    port: number = 3000;

    constructor(domain: string = 'adtap.network') {
        super();
        this.domain = domain;
        this.context = new Context(this.domain);
    }

    doTemplate(): void {
        const ViewClass = ViewClasses[this.context.route.section.toLowerCase()];
        if(ViewClass) {
            const view = new ViewClass(this.context);
            this.content = view.handle(); 
        }
    }

    async logException(e: unknown, file: string, func: string, dump: boolean=false) {
        if(e instanceof Error) {
            this.context.errors.logException(e, file, func, 'error', dump);
        }
    }

    process(): void {
        const app = express();
        app.use('/:view/:action', (req: Request, res: Response) => {
            this.context.mergeRequest(req);
            this.doTemplate();            
            if(this.context.route.id == 'home_unknown' || this.content == '') { 
                res.status(404).send('Page Not Found'); 
            }
        });
        app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }

}
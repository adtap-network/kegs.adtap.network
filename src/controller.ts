import { Base, Context, ContextInterface, ViewClasses } from './exports';
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
            const instance = new ViewClass();
            const methodName = `render${this.context.route.handler.charAt(0).toUpperCase() + this.context.route.handler}`; 
            if(typeof instance[methodName] === 'function') {
                this.content = instance[methodName](this.context);
            }
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
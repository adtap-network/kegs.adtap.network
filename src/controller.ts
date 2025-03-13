import Base from './base';
import Context from './context';
import ContextInterface from './interfaces/context';
import express, { Request, Response, NextFunction } from "express";

export default class Controller extends Base {

    context: ContextInterface;
    domain: string = '';
    port: number = 3000;

    constructor(domain: string = 'adtap.network') {
        super();
        this.domain = domain;
        this.context = new Context(this.domain);
    }

    process(): void {
        const app = express();
        app.use('/:view/:action', (req: Request, res: Response) => {
            this.context.mergeRequest(req);


            const { view, action } = req.params;
            const ViewClass = viewClasses[view.toLowerCase()];
        
            if (ViewClass) {
                const instance = new ViewClass();
                const methodName = `render${action.charAt(0).toUpperCase() + action.slice(1)}`;
        
                if (typeof instance[methodName] === 'function') {
                    return instance[methodName](req, res);
                }
            }
        
            res.status(404).send('Page Not Found');
        });

        app.listen(this.port, () => {
            console.log(`Server running on http://localhost:${this.port}`);
        });
    }

}
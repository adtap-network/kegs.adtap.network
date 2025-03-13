import Base from './base';
import Context from './context';
import ContextInterface from './interfaces/context';
import { ViewClasses } from './exports/views';
import express, { Request, Response } from "express";
import { transform, type TransformResult } from "@astrojs/compiler";

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

    getBlockContent(block: string): Promise<string> { return this.getTemplateContent('blocks_' + block); }

    getLayoutContent(layout: string): Promise<string> { return this.getTemplateContent('layouts_' + layout); }

    getScreenContent(screen: string): Promise<string> { return this.getTemplateContent('screens_' + screen); }

    async getTemplateContent(template: string): Promise<string> {
        const p = this.context.peer.template + this.context.ps + template.replace('_', this.context.ps) + '.adtap';
        const x = this.context.exportProps();
        let s = await this.readFile(p);

        const f= `---
const Astro = { props: ${JSON.stringify(x)} };
---\n`;

        let i = f + s;
        const t: TransformResult = await transform(i, {
            filename: p,
            sourcemap: "both",
            internalURL: "astro/runtime/server/index.js"
        });
        return t.code;
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
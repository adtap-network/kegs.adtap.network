import Base from './base';
import ContextInterface from './interfaces/context';
import { transform, type TransformResult } from "@astrojs/compiler";

export default class View extends Base {

    content: string = "";
    context: ContextInterface;

    constructor(context: ContextInterface) {
        super();
        this.context = context;
    }

    getBlockContent(block: string): string { const t = this.getTemplateContent("blocks_" + block); return t.toString(); }

    getLayoutContent(layout: string): string { const t = this.getTemplateContent("layouts_" + layout); return t.toString(); }

    getScreenContent(screen: string): string { const t = this.getTemplateContent("screens_" + screen); return t.toString(); }

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

    handle(): string {
        if(this.context.route.format == 'rest') { this.content = this.handleRest(); }
        else if(this.context.route.format == 'block') { this.content = this.handleBlock(); }
        else if(this.context.route.format == 'screen') { this.content = this.handleScreen(); }
        return this.content;
    }

    handleBody(): string {
        let t = "";
        const f = `render${this.context.route.handler.charAt(0).toUpperCase() + this.context.route.handler}`; 
        if(typeof this[f] === 'function') { t = this[f](); }
        return t;
    }

    handleBlock(): string {
        const t = this.renderBody();
        return t;
    }

    handleRest(): string {
        const t = this.renderBody();
        return JSON.stringify(t);
    }

    handleScreen(): string {
        let t = "";
        this.context.content = this.renderBody();
        let p = this.getLayoutContent("page");
        t = p.toString();
        return t;
    }


    renderData(): string {
        return this.content;
    }

    renderDelete(): string {
        return this.content;
    }

    renderDisplay(): string {
        return this.content;
    }

    renderEdit(): string {
        return this.content;
    }

    renderGet(): string {
        return this.content;
    }

    renderIndex(): string {
        return this.content;
    }

    renderIsland(): string {
        return this.content;
    }

    renderModal(): string {
        return this.content;
    }

    renderMore(): string {
        return this.content;
    }

    renderNew(): string {
        return this.content;
    }

    renderSave(): string {
        return this.content;
    }

    renderSearch(): string {
        return this.content;
    }

}

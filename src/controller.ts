import Base from './base';
import Context from './context';
import ContextInterface from './interfaces/context';

export default class Controller extends Base {

    context: ContextInterface;
    domain: string = '';

    constructor(domain: string = 'adtap.network') {
        super();
        this.domain = domain;
        this.context = new Context(this.domain);
    }

    process(): void {

    }

}
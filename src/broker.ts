import Base from './base';
import ContextInterface from './interfaces/context';

export default class Broker extends Base {

    context: ContextInterface;

    constructor(context: ContextInterface) {
        super();
        this.context = context;
    }

    


}
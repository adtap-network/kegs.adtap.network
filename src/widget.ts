import Base from './base';
import ContextInterface from './interfaces/context';
import FiltersInterface from './interfaces/filters';
import ParamsInterface from './interfaces/params';
import QueryInterface from './interfaces/query';

export class Widget extends Base {

    context: ContextInterface;
    id: string = 'widget';
    formId: string = "";
    template: string = "";
    feature: string = "";
    title: string = '';
    icon: string = '';
    content: string = '';
    autoload: boolean =	false;
    query: QueryInterface;
    params: ParamsInterface;
    filters: FiltersInterface;

    constructor(context: ContextInterface) {
        super();
        this.context = context;
        this.query = this.context.query;
        this.params = this.context.params;
        this.filters = this.context.filters;
    }


}
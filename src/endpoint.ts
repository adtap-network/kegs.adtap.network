import Base from './base';

export default class Endpoint extends Base {

    id: string                  = 'home_unknown';
    title: string               = '';
    section: string             = '';
    module: string              = '';
    handler: string             = '';

    constructor() { super({}); }

}
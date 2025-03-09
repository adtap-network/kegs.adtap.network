import Bean from './bean';

export default class Endpoint extends Bean {

    id: string                  = 'home_unknown';
    title: string               = '';
    section: string             = '';
    module: string              = '';
    handler: string             = '';

    constructor() { super({}); }

}
import Base from './base';

export default class Route extends Base {

    id: string                  = 'home_unknown';
    title: string               = '';
    format: string              = '';
    section: string             = '';
    module: string              = '';
    handler: string             = '';
    action: string              = '';
    level: number               = 0;

    constructor() { super({}); }


    getLevel(): number { return this.level; }


    setLevel(level: number): void { this.level = level; }

}
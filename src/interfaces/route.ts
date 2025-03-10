import BaseInterface from './base';

export default interface RouteInterface extends BaseInterface {

    id: string;
    title: string;
    format: string;
    section: string;
    module: string;
    handler: string;
    action: string;
    level: number;

    getLevel(): number;

    setLevel(level: number): void;

}
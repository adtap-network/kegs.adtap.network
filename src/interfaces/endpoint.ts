import BeanInterface from './bean';

export default interface EndpointInterface extends BeanInterface {

    id: string;
    title: string;
    section: string;
    module: string;
    handler: string;

}
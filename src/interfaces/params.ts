import BaseInterface from './base';
import FiltersInterface from '../interfaces/filters';

export default interface ParamsInterface extends BaseInterface {
    
        filters: FiltersInterface;
        action: string; 
        card: string; 
        error: boolean; 
        formId: string; 
        mode: string; 
        search: boolean; 
        route: string;
        endpoint: string;
        tab: number; 
        tabindex: number; 
        validation: boolean; 
        task: string; 
        nonce: number;
        format: string; 
        secret: string; 
        keywords: string; 
        logout: boolean; 
        crypt: string;

} 
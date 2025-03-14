import Base from './base';
import RowInterface from './interfaces/row';

export default class Row extends Base implements RowInterface {

    constructor(a: Record<string, any> = {}) {
        super(a);
    }
}
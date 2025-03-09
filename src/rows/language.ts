import Row from '../row';
import RowInterface from '../interfaces/row';
import { LanguagesSchema } from '../schemas/languages';

export default class LanguageRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('language'); }

    validateInput(input: any): boolean {
        const validation = LanguagesSchema.validate(input);
        return validation;
    }

}
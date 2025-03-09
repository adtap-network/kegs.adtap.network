import { Row, RowInterface} from "bns.adtap.network";
import { LanguagesSchema } from '../schemas/languages';

export class LanguageRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('language'); }

    validateInput(input: any): boolean {
        const validation = LanguagesSchema.validate(input);
        return validation;
    }

}
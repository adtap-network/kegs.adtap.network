import { Row, RowInterface} from "bns.adtap.network";
import { CountriesSchema } from '../schemas/countries';

export class CountryRow extends Row implements RowInterface {

    constructor(a: Record<string, any> = {}) { super(a) }

    getDataArray(): [string, any][] { return this.getPropertiesArray('activity'); }

    validateInput(input: any): boolean {
        const validation = CountriesSchema.validate(input);
        return validation;
    }

}
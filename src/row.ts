import Bean from './bean';

export default class Row extends Bean {

    constructor(a: Record<string, any> = {}) {
        super({});
        this.mergeProperties(a);
    }

    getPropertiesArray(prefix: string = ''): [string, any][] {
        const properties: [string, any][] = [];
        for (const key in this) {
            if (this.hasOwnProperty(key)) {
                const propertyKey = prefix ? `${prefix}_${key}` : key;
                properties.push([propertyKey, this[key]]);
            }
        }
        return properties;
    }

    getRowArray(): [string, any][] { return this.getPropertiesArray(''); }
}
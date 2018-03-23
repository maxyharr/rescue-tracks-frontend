import * as _ from "lodash";

const HAS_FIELD_REGEX = /^__has_(\w+)__$/;

export class AbstractModel {
    public id: number;
    public createdAt: Date;
    public updatedAt: Date;

    constructor(params?: any) {
        Object.assign(this,
            _.omitBy(params, (value, key) => _.startsWith(key, "__"))
        );

        _.chain(params)
         .pickBy((value, key) => !!HAS_FIELD_REGEX.test(key) && value)
         .each((value, key) => {
             let lookup = key.match(HAS_FIELD_REGEX)[1];
             this[`_${lookup}`] = params[`__${lookup}__`];
         }).value();
    }

    protected addArray(key: string, klass: typeof AbstractModel, items: any[]) {
        this[key] = _.map(items, (i) => {
            if(!(i instanceof klass)) {
                return new klass(i)
            } else {
                return i;
            }
        });
    }

    protected add(key: string, klass: typeof AbstractModel, item: any) {
        if(!(item instanceof klass)) {
            this[key] = new klass(item)
        } else {
            this[key] = item;
        }
    }
}

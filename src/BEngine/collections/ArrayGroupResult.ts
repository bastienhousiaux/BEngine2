import { Array1D } from './Array1D';

export class ArrayGroupResultItem<T>{
    constructor(public index: number, public value: T) {

    }
}

/**
 * array of index-value pair returned if a pattern as been found in a pattern search (set or group)
 */
export class ArrayGroupResult<T> extends Array1D<ArrayGroupResultItem<T>>{
    constructor(length: number = 0) {
        super(length);
    }

    /**
     * get the first index (from the original array) of a specific value in the pattern
     * @param value the value to search
     */
    getFirstResultIndexOf(value: T): number {
        return this.get(this.indexOfProp("value", value)).index;
    }

    /**
     * get one of the indexes (from the original array) of a specific value in the pattern
     * @param value the value to search
     */
    getRandResultIndexOf(value: T): number {
        var indexes = this.indexesOfProp("value", value);
        return this.get(indexes[Math.floor(Math.random() * indexes.length)]).index;
    }
}

import { BEngineObject } from './../client/core/BEngineObject';


export class Array1D<T> extends BEngineObject {
    array: Array<T> = new Array<T>();

    constructor(length: number = 0, defaultValue: T = undefined) {
        super();
        this.array.length = length;
        if (defaultValue != undefined) this.fill(defaultValue);
    }

    isIndexInRange(index: number): boolean {
        return index >= 0 && index < this.length;
    }

    fill(value: T) {
        for (var i = 0; i < this.array.length; i++)this.array[i] = value;
    }

    concat(array: Array1D<T>): T[] {
        return this.array.concat(array.array);
    }

    fusionWith(array: Array1D<T>): void {
        this.array = this.concat(array);
    }

    get(x: number): T {
        return this.array[x];
    }

    set(x: number, value: T): T {
        var old = this.get(x);
        this.array[x] = value;
        return old;
    }

    switch(i: number, j: number) {
        this.set(j, this.set(i, this.get(j)));
    }

    /**
     * return the index of the first occurence of value in the array
     * return -1 if value isn't found
     * @param value value to find
     */
    indexOf(value: T, startIndex: number = 0): number {
        return this.array.indexOf(value, startIndex);
    }
    /**
     * 
     * @param value 
     */
    indexesOf(value: T): number[] {
        var values: number[] = [];
        var index = 0;
        while ((index = this.indexOf(value, ++index)) >= 0) values.push(index);
        return values;
    }

    // indexOfProp(propName:string,value:any):number{
    //     for(var i=0;i<this.length;i++){
    //         if(this.get(i).getProp()===value){
    //             return i;
    //         }
    //     }
    //     return -1;
    // }

    // indexesOfProp(propName:string,value:any):number[]{
    //     var indexes=[];
    //     for(var i=0;i<this.length;i++){
    //         if(this.get(i)[propName]===value){
    //             indexes.push(i);
    //         }
    //     }
    //     return indexes;
    // }

    removeAt(index: number): T {
        return this.array.splice(index, 1)[0];
    }

    removeFirst(value: T): number {
        var i = this.indexOf(value);
        if (i < 0) return -1;
        else {
            this.removeAt(i);
            return i;
        }
    }

    removeAll(value: T): number[] {
        var indexes = this.indexesOf(value);
        for (var i = 0; i < indexes.length; i++)this.removeAt(indexes[i] - i);
        return indexes;
    }

    forEach(callback: (element: T, index: number, array: BEngine.collections.Array1D<T>) => void) {
        for (let index = 0; index < this.length; index++) {
            callback(this.get(index), index, this);
        }
    }

    /**
     * check if a set is in the array,
     * returns the index of the beginning of the first occurence found
     * returns -1 if no occurence found
     * 
     * @param set the serie to compare
     */
    indexOfSet(set: Array<T>): number {
        //can be a problem because no getting back when the pattern is unverified
        //but can't find a set that would make a problem
        var currSetIndex: number = 0;

        for (var i = 0; i < this.length; i++) {
            if (set[currSetIndex] === this.get(i))
                if (++currSetIndex === set.length) return i - set.length + 1;
                else
                    currSetIndex = 0;
        }

        return -1;
    }

    /**
     * check if a group is in the array,
     * returns the index of the beginning of the first occurence found
     * returns -1 if no occurence found
     *  
     * @param set 
     */
    indexOfGroup(group: Array<T>) {
        var currSetIndex: number = 0;

        for (var i = 0; i < this.length; i++) {
            var groupCopy = group.slice();
            var j = 0;
            while ((currSetIndex = groupCopy.indexOf(this.get(i + j))) >= 0) {
                groupCopy.splice(currSetIndex, 1);
                j++;
            }
            if (groupCopy.length === 0) return i;
        }

        return -1;
    }

    /**
     * find the first matching sequence of group in the array (order not important)
     * and returns it with the starting index, returns null if not found
     * @param group 
     */
    findGroup(group: Array<T>, start: number = 0, end: number = this.length - 1, step: number = 1): BEngine.collections.ArrayGroupResult<T> {
        var currSetIndex: number = 0;
        var realGroup: Array<T>;

        for (var i = start; i <= end; i += step) {
            realGroup = new Array<T>();
            var groupCopy = group.slice();
            var j = 0;
            while ((i + j) <= end && (currSetIndex = groupCopy.indexOf(this.get(i + j))) >= 0) {
                realGroup.push(groupCopy.splice(currSetIndex, 1)[0]);
                j += step;
            }
            if (groupCopy.length === 0) {
                var result = new BEngine.collections.ArrayGroupResult<T>(group.length);
                for (var k = 0; k < group.length; k++) {
                    result.set(k, new ArrayGroupResultItem<T>(i + k * step, realGroup[k]));
                }
                return result;
            }
        }

        return null;
    }

    findGroups(group: Array<T>, start: number = 0, end: number = this.length - 1, step: number = 1): Array1D<BEngine.collections.ArrayGroupResult<T>> {
        var results = new BEngine.collections.Array1D<BEngine.collections.ArrayGroupResult<T>>();
        var currStart = start;
        var result: ArrayGroupResult<T> = null;
        while (result = this.findGroup(group, currStart, end, step)) {
            results.push(result);
            currStart = result.get(0).index + step;
        }
        return results;
    }

    getRandomIndex(): number {
        return Math.floor(Math.random() * this.length);
    }

    getRandomIndexWithValue(value: T): number {
        if (this.indexOf(value) !== -1) {
            var index;
            while (this.get(index = this.getRandomIndex()) != value);
            return index;
        } else {
            return -1;
        }

    }

    get length(): number {
        return this.array.length;
    }

    push(element: T) {
        this.array.push(element);
    }
}
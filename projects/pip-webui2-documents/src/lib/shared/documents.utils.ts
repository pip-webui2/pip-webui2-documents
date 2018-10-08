export function each(array, iteratee) {
    let index = -1;
    const length = array == null ? 0 : array.length;

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}

function comparer(otherArray, comparator) {
    return function (current) {
        return otherArray.filter(function (other) {
            return comparator(current, other);
        }).length === 0;
    };
}

export function difference(arr1, arr2, comparator, concat: boolean = false) {
    const onlyInA = arr1.filter(comparer(arr2, comparator));
    const onlyInB = arr2.filter(comparer(arr1, comparator));

    const result = concat ? onlyInA.concat(onlyInB) : onlyInA;

    return result;
}

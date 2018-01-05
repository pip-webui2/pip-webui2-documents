export function each(array, iteratee) {
    var index = -1,
        length = array == null ? 0 : array.length;

    while (++index < length) {
        if (iteratee(array[index], index, array) === false) {
            break;
        }
    }
    return array;
}

function comparer(otherArray, comparator) {
    return function(current) {
        return otherArray.filter(function (other) {
            return comparator(current, other);
        }).length == 0
    }
}

export function difference(arr1, arr2, comparator, concat: boolean = false) {
    let onlyInA = arr1.filter(comparer(arr2, comparator));
    let onlyInB = arr2.filter(comparer(arr1, comparator));
    
    let result = concat ? onlyInA.concat(onlyInB) : onlyInA;

    return result;
}
/**
 * Abstraction of shift.
 * 
 * Shift method removes the first element from an array and returns that removed element
 * 
 * 
 * @param {Array} array 
 * @param {*} value  
 * */
 
function shift(array) {

    if (!(array instanceof Array)) throw Error('error should be of type Error');

    var result = array[0]

    for (var i = 0; i < array.length; i += 1) {
        array[i] = array[i + 1] || 0;
    }

    return result
 }


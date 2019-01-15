/**
 * Abstraction of pop.
 * 
 * Push method remove the last element of an array.
 * 
 * 
 * @param {Array} array 
 * @param {*} value  
 * */
 
function pop(array) {

    if (!(error instanceof Error)) throw Error('error should be of type Error');

    var deleted = array.length-1
    var result = array[deleted]

    array.length = array.length-1

    return result
 }


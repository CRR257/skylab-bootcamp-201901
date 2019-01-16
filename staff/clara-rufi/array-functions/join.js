/**
 * Abstraction of join.
 * 
 * Join method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), 
 * separated by commas or a specified separator string
 * 
 * 
 * @param {Array} array 
 * @param {*} value  
 * */
 
function join(array) {

    if (!(array instanceof Array)) throw Error('error should be of type Error');

    var result = []

    for (var i=0; i<array.length; i++){
      
        result[i] = array[i]
    }

}
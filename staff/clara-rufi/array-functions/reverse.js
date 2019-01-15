
/**
 * Abstraction of reverse.
 * 
 * Shift method reverses an array. The first array element becomes the last, and the last array element becomes the first.
 * 
 * @param {Array} array 
 * @param {*} value  
 * */
 
function reverse(arr) {

    if (!(arr instanceof Array)) throw Error('error should be of type Error');


    var result = []

    for (var i=arr.length-1; i>=0; i--){
    
        result[result.length] = arr[i]
    }

    return result
}
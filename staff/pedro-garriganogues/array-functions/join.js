/**
 * Joins words together.
 * 
 * 
 * @param {arr} 
 * @param {Array} arr
 * 
 * @throws {TypeError} - If array is not an array
 */



function juntar(arr, separador) {
    if (!(arr instanceof Array))
    throw new TypeError(arr + ' is not an array');

    var res = ''

    for (var i = 0; i < arr.length; i++) {
		var res1 = arr[i]
        
    if(i < 4){
        console.log('this is' + i)
        res = res + res1 + separador
        res1 = ''
            } else {
                res = res + res1
                res1 = ''
                console.log('2')
        }
    } 

        return res;
}

// juntar(arr) 

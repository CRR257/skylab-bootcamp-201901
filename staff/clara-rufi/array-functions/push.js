/**
 * Abstraction of push.
 * 
 * Push method adds one or more elements to the end of an array.
 * 
 * 
 * @param {Array} array 
 * @param {*} value  
 * */
 
 function push() {

    
    if(!(arguments[0] instanceof Array)) throw TypeError(arguments[0] + ' is not an array');

    for (var i=1; i<arguments.length; i++){
        arguments[0][arguments[0].length]= arguments[i]
    }

    return arguments[0].length;
 }


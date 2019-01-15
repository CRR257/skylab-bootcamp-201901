 /*      escriure /** i comentar tot */

/**
 *
 * Abstraction of fill
 * 
 * Fills an array from one position to other
 *  
 * @param {*} arr 
 * @param {*} value 
 * @param {*} start 
 * @param {*} end 
 */

arr = [1,2,3,4, 5]

var res = fill (arr, 0,0,2); //[0,0,3,4,5]

console.log(res)
console.log(arr) // veiem q arr tb ha canviat, pq fill canvia l'array origen

/*ho provem a la consola
arr = [1,2,3,4, 5]

arr.fill(0,0,2)
resultat ::[0, 0, 3, 4, 5]
*/

array = [1,2,3,4, 5]

function fill(arr, value, start, end){
    end = end === undefined? array.lenght : end; 
    /*  opercio ternaria  => end === undefined? array.lenght : end;
    es end === a true or false? end no l'estem passant com a valor a end, no esta definit, x tant es un undefined
    si es undefined, li assignarem el valor de end

    si fessim:

    var = [1,2,3,4]
    var res = fill (0)

    resultat = [0,0,0,0]


    // 

    var = [1,2,3,4]
    var res = fill (0, "a", 2)

    resultat = [0,0,3,4] el a com q no es numeèric, l'interpreta com si fos posició 0, i 
    omple fins la posició 2 sense inclure


    var = [1,2,3,4]
    var res = fill (0, true, 2) el true l'implementa com a 1


    arr = [1, 2, 3]
    
    var res= fill (arr, 0, -3, -2); // resultat [1, 2, 3, -3: 0]  dona valors raros

    start = start === undefined? 0:(start<0? array.lenght + start:start)  anidem ternaris
     1er valore, start === undefined? si es 0, donem valor start

    
    
    
    
    
     end = end === undefined? 0:(end<0? array.lenght + end:start) 




    validacio de camps, estem mirant q un camp sigui el q diem:

    function fill(arr, value, start, end){

        if (!(array.instanceof Array))){
            console.log(array + "is not array");

            return;
        }


        comprovem q no sigui un array, sino, retorna

    */

for (var i=start; i<end; i++){
    arr[i] = value

    return array;
}

}
console.log(array.fill(0,2,4))



// ternay

var x; si no se li dona valor, per defecte es false

var y = x? y:1

mirarà 1er si y es false (pq x es false), i com q no es false, li assignem valor 1 a la y



arra.isArray [{}] // false

var x ={}
x instanceof Array
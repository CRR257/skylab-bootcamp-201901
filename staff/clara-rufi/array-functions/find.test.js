test('find element that exist', function () {

    var array = [1,2,3,4,5];

    var found = array1.find(function(element) {
    return element > 10;
    })

    if(found !==12) throw Error ("found value" + found + "does not match expected" + expected);
}


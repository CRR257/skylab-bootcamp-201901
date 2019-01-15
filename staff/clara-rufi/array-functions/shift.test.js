suite ("shift")


test('should fail on none array', function () {
    
    var array = [5, 12, 8, 130, 44];

    var error;
    try { // try catch solo en los casos de fail
        shift();
    } catch (err) {
        error = err;
    }

    if (!(error instanceof Error)) throw Error('should have thrown TypeError');
});


test('delete first argument', function () {
    
    var array = [5, 12, 8, 130];

    var expected = 5
    var res = shift(array)


    if(res !== expected) throw Error(res + ' does not match expected ' + expected); 
});

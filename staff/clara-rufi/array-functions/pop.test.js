suite ("pop")


test('should fail on none array', function () {
    
    var array = [5, 12, 8, 130, 44];

    var error;
    try {
        pop();
    } catch (err) {
        error = err;
    }

    result = array.pop()

    if (!(error instanceof Error)) throw Error('should have thrown TypeError');
});


test('delete last argument', function () {
    
    var array = [5, 12, 8, 130];

    var error;
    try {
        pop();
    } catch (err) {
        error = err;
    }

    var expected = 130
    var res = array.pop()


    if(res !== expected) throw Error(res + ' does not match expected ' + expected); 
});

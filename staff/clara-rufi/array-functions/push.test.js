suite ("push")

test('should fail on none array', function () {
    var error;

    try {
        push(null, 6);
    } catch (err) {
        error = err;
    }

    if (!error) throw Error('should have thrown an error');
    if (!(error instanceof TypeError)) throw Error('should have thrown TypeError');
});



test('push arguments', function () {
    var array = [1, 2, 3, 4, 5];

    var res = push(array, 6);

    var expected = 6 /*array.length*/  

    if(res !== expected) throw Error(res + ' does not match expected ' + expected); 
});


test('push arguments 2', function () {
    var array = [];

    var res = push(array, 6, 55, 77);


    var expected = 3  

    if(res !== expected) throw Error(res + ' does not match expected ' + expected); 
});


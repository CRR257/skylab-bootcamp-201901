suite ("reverse")


test('should fail on none array', function () {
    
    var array = [5, 12, 8, 130, 44];

    var error;
    try {
        reverse();
    } catch (err) {
        error = err;
    }

    result = array.reverse()

    if (!(error instanceof Error)) throw Error('should have thrown TypeError');
});

test('3 arguments', function () {
    var arr = [1, 2, 3];

    var res = reverse(arr);

    var expected = [3, 2, 1];

    if (res.toString() !== expected.toString()) throw Error('result should be the one expected');
});
suite ("join")


test('should fail on none array', function () {
    
    var array = [5, 12, 8, 130, 44];

    var error;
    try {
        reverse();
    } catch (err) {
        error = err;
    }

    result = array.join()

    if (!(error instanceof Error)) throw Error('should have thrown TypeError');
});

test('3 arguments', function () {
    var arr = [1, 2, 3];

    var res = join(arr);

    var expected = "123"

    if (res !== expected) throw Error('result should be the one expected');
});
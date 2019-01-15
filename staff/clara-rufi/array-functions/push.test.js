
test('push all arguments', function () {
    var arr = [1, 2, 3, 4, 5];

    var res = array.push(6);

    var expected = [1, 2, 3, 4, 5, 6]

    if (res !== arr) throw Error('array and result should be the same');
    if (res.toString() !== expected.toString()) throw Error('result should be the one expected');
    if (arr.toString() !== expected.toString()) throw Error('array should have been changed to the one expected');
});

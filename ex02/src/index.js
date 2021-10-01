function* myGenerator() {
    yield* insideGenerator1();
    yield* insideGenerator2();
    yield* insideGenerator3();

}
function* insideGenerator1() {
    var x = 0
    for (var i = 1; i < 6; i++) {
        x++;
        yield x;
    }
}
function* insideGenerator2() {
    var x = 9
    for(var i = 0; i < 6; i++) {
        x++;
        yield x;
    }
}
function* insideGenerator3() {
    var x = 5;
    for(i = 0; i < 4; i++) {
        x++;
        yield x;
    }
}
const iterator = myGenerator();
fiftenArray = [];

for(var j = 0; j < 15; j++) {
    fiftenArray.push(iterator.next().value);
};
console.log(fiftenArray.join("#, ") + "#, " + undefined + "!");

module.exports = { fiftenArray, myGenerator};
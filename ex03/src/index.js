function* myGenerator() {
    yield [1, 2, 3, 4, 5];
    yield 'Arena';
    yield (6, 7, 8);
}

const iterator = myGenerator();
generatorArray = [];

for(v of myGenerator()) {
    generatorArray = [myGenerator];
    console.log(generatorArray);
}






module.exports = {generatorArray, myGenerator};
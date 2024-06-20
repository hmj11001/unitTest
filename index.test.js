const {addNum} = require("./index.js");

test ('add the numbers', () => {
    const addAll = addNum(2, 7);
    const expectedAdd = 9;
    expect(addAll).toBe(expectedAdd);
});
const {multiplyNum} = require("./index.js");
test('multiply the numbers', () => {
    const multiplyAll = multiplyNum(4, 8);
    const expectedMultiply = 32;
    expect(multiplyAll).toBe(expectedMultiply);
});

const {divideNum} = require("./index.js");
test('divide the numbers', () => {
    const divideAll = divideNum(20, 4);
    const expectedDivide = 5;
    expect(divideAll).toBe(expectedDivide);
});
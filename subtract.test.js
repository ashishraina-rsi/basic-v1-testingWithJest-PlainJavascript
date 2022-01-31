const sub = require('./subtract');

test("Sub function subtracts two number properly", () => {
    expect(sub(1,2)).toBe(-1);
})
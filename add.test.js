const add = require('./add');

test("Add function adds two number properly", () => {
    expect(add(1,2)).toBe(3);
})
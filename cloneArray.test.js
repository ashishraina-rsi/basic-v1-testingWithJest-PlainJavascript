const cloneArray = require('./cloneArray');

test("CloneArray Provides similar immutable array", () => {
    const arr = ["a", "b", "c"];
    expect(cloneArray(arr)).toEqual(arr);
    expect(cloneArray(arr)).not.toBe(arr);
})
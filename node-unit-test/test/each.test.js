import { sumAll } from "../src/sum";
const table = [
    [[], 0],
    [[10, 10, 10], 30],
    [[10, 10, 20], 40],
    [[10, 10, 30], 50],
    [[10, 10, 10, 10, 10, 10], 60],
]

test.each(table)("test sumAll(%s) should result %i", (numbers, expected) => {
    expect(sumAll(numbers)).toBe(expected);
})

const table2 = [

    { numbers: [1, 2, 3], expected: 6 },
    { numbers: [5, 5, 5], expected: 15 },
]

test.each(table2)("test sumAll{$numbers} should result {$expected}", ({ numbers, expected }) => {
    expect(sumAll(numbers)).toBe(expected);
})
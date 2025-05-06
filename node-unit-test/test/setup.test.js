import { sum } from "../src/sum";
beforeAll(() => {
    console.info("Before All ");
})
afterAll(() => {
    console.info("After All");
})

beforeEach(() => {
    console.info("Before Each");
})

afterEach(() => {
    console.info("After Each");
})

test("first test", () => {
    expect(sum(10, 20)).toBe(30);
    console.info("First test");
})

test("second test", () => {
    expect(sum(20, 20)).toBe(40);
    console.info("Second test");
})

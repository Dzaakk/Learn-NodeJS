
beforeAll(() => console.info("Before All Outer"))
afterAll(() => console.info("After All Outer"))
beforeEach(() => console.info("Before Each Outer"))
afterEach(() => console.info("After Each Outer"))

test("test Outer", () => {
    console.info("Test Outer")
})

describe("Inner", () => {
    beforeEach(() => console.info("Before Each Inner"))
    afterEach(() => console.info("After Each Inner"))
    test("test Inner", () => console.info("Test Inner"));
})
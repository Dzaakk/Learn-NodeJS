import { sayHello } from "../src/sayHello";


test("sayHello success", () => {
    expect(sayHello("Dzak")).toBe("Hello Dzak")
})
test.failing("sayHello error 1", () => {
    sayHello(null)
})

test("sayHello error 2", () => {
    expect(() => sayHello(null)).toThrow()
})
import { callMe, MyException } from "../src/exception"

test("exception", () => {
    expect(() => callMe("Dzak")).toThrow()
    expect(() => callMe("Dzak")).toThrow(MyException)
    expect(() => callMe("Dzak")).toThrow("this is exception")
})

test("exception not happens", () => {
    expect(callMe("bob")).toBe("OK")
})
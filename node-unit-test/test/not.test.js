test("string not", () => {
    const name = "Dzak";
    expect(name).not.toBe("jaka");
    expect(name).not.toEqual("budi");
    expect(name).not.toMatch(/am/);
})
test("numbers", () => {
    const value = 2 + 2

    expect(value).not.toBeGreaterThan(6)
    expect(value).not.toBeGreaterThanOrEqual(10)

    expect(value).not.toBeLessThan(2)
    expect(value).not.toBeLessThanOrEqual(3)

    expect(value).not.toBe(1)
})
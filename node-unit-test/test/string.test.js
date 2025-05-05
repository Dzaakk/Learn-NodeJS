test("string", () => {
    const name = "Dzak";
    expect(name).toBe("Dzak");
    expect(name).toMatch(/ak/);
})
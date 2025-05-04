test("test toBe", () => {
    const name = "Dzak";
    const hello = `Hello ${name}`;

    expect(hello).toBe('Hello Dzak');
})

test("test toEqual", () => {
    let person = { id: "Dzak" };
    Object.assign(person, { name: "Dzaky" })

    expect(person).toEqual({ id: "Dzak", name: "Dzaky" })
})
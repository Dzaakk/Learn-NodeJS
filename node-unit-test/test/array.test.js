test("array matcher", () => {
    const names = ["dzak", "budi", "jaka"];
    expect(names).toEqual(["dzak", "budi", "jaka"]);
    expect(names).toContain("jaka");
});

test("array object", () => {
    const person = [
        {
            name: "dzak"
        },
        {
            name: "mamang"
        },
    ];
    expect(person).toContainEqual({
        name: "mamang"
    });
})
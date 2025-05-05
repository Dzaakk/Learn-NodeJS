import { sayHelloAsync } from "../src/async.js";

test("test async func", async () => {
    const result = await sayHelloAsync("Dzak");
    expect(result).toBe("Hello Dzak");
})

test("test async matchers", async () => {
    await expect(sayHelloAsync("Dzak")).resolves.toBe("Hello Dzak");
    await expect(sayHelloAsync()).rejects.toBe("Name is empty");
})
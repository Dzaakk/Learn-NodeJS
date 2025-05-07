import { sayHelloAsync } from "../src/async"


test.concurrent("concurrent 1", async () => {
    await expect(sayHelloAsync("Jaka")).resolves.toBe("Hello Jaka")
})
test.concurrent("concurrent 2", async () => {
    await expect(sayHelloAsync("Budi")).resolves.toBe("Hello Budi")
})
test.concurrent("concurrent 3", async () => {
    await expect(sayHelloAsync("Dzak")).resolves.toBe("Hello Dzak")
})
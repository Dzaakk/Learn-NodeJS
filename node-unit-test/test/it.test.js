import { sumAll } from "../src/sum";
describe("when call sumAll", () => {
    it("should get 30 with parameter [10,10,10]", () => {
        expect(sumAll([10, 10, 10])).toBe(30);
    });
    it("should get 50 with parameter [20,10,20]", () => {
        expect(sumAll([20, 10, 20])).toBe(50);
    });
})
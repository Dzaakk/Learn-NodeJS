import { calculate, calculateAndReturn } from "../src/sum";

test("test calculate", () => {
    const callback = jest.fn();

    calculate([10, 10], callback);
    calculate([10, 30, 45], callback);

    expect(callback.mock.calls.length).toBe(2);

    console.info(callback.mock.calls1);

    expect(callback.mock.calls[0][0]).toBe(20)
    expect(callback.mock.calls[1][0]).toBe(85)
})

test("calculate without mock function", () => {
    const logging = (total) => {
        console.info(total);
    }
    calculate([10, 10], logging);
    calculate([10, 30, 45], logging);

})

test("test mock return value", () => {
    const callback = jest.fn();
    callback.mockReturnValueOnce(40);
    callback.mockReturnValueOnce(80);

    expect(calculateAndReturn([10, 5], callback)).toBe(40)
    expect(calculateAndReturn([10, 5], callback)).toBe(80)


    expect(callback.mock.results[0].value).toBe(40)
    expect(callback.mock.results[1].value).toBe(80)
})

test("test mock implementation", () => {
    const callback = jest.fn();
    callback.mockImplementation((total) => {
        return total * 2;
    });

    expect(calculateAndReturn([10, 5], callback)).toBe(30)
    expect(calculateAndReturn([10, 10], callback)).toBe(40)


    expect(callback.mock.results[0].value).toBe(30)
    expect(callback.mock.results[1].value).toBe(40)
})
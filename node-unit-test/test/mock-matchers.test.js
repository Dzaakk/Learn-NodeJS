import { calculate } from "../src/sum";

test("test mock matchers", () => {
    const callback = jest.fn();

    calculate([5, 5, 5], callback);
    calculate([20, 5, 5], callback);

    expect(callback).toHaveBeenCalled();
    expect(callback).toHaveBeenCalledTimes(2);
    expect(callback).toHaveBeenCalledWith(15);
    expect(callback).toHaveBeenCalledWith(30);
})
import { getAllProducts } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js", () => {
    const originalModule = jest.requireActual("../src/database.js");

    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn(),
    }
});

test.failing("mock modules getProductById", () => {
    ProductService.findById(1);
})

test("mock modules getAllProducts", () => {
    getAllProducts.mockImplementation(() => {
        const products = [
            {
                id: 1,
                name: "Product Mock"
            },
            {
                id: 2,
                name: "Product Mock 2"
            }

        ];

        getAllProducts.mockImplementation(() => {
            return products;
        })

        expect(ProductService.findAll()).toEqual(products);
    });

})
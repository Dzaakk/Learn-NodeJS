import { getAllProducts, getProductById } from "../src/database";
import { ProductService } from "../src/product-service";

jest.mock("../src/database.js")
test("mock modules getProductById", () => {
    getProductById.mockImplementation((id) => {
        return {
            id: id,
            name: "Product Mock"
        }
    });

    const product = ProductService.findById(1);

    expect(product).toEqual({
        id: 1,
        name: "Product Mock"
    });
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
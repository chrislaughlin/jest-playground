import { add, asyncAdd } from "../sum";

describe("Sum", () => {
    test("should add two numbers", () => {
        expect(add(1, 1)).toEqual(2);
    });

    test("should add two numbers", () => {
        expect(add(1, 1)).not.toEqual(3);
    });

    test("Async add one way", async () => {
        const total = await asyncAdd(1, 1);

        expect(total).toEqual(2);
    });

    test("Async add one way", () => {
        return asyncAdd(1, 1).then(result => {
            expect(result).toEqual(2);
        });
    });
});

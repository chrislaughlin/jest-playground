import * as stringUtils from "../stringUtils";
import * as boomer from "../boomer";
jest.mock("../boomer");

describe("String Utils", () => {
    test("should build full name", () => {
        boomer.addBoomer.mockImplementation(name => {
            return `${name} not so much boomer`;
        });

        expect(stringUtils.buildName("Chris", "Laughlin")).toEqual(
            "Chris Laughlin not so much boomer"
        );
    });
});

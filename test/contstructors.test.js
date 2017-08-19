import { assert } from "chai";
import { point } from "../src/constructors";

describe("point constructor", function () {
    it("creates object of the from {x: x, y: y} to represent a point", function () {
        assert.deepEqual(point(1, 2), {x: 1, y: 2});
    })
});
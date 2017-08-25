import { assert } from "chai";
import { boundingRect } from "../src/boundingRectangles";
import { point, lineSegment } from "../src/constructors";

describe("boundingRect", function () {
    describe("#lineSegment", function () {
        it("returns a minimal rectangle that contains given line segment", function () {
            assert.deepEqual(
                boundingRect(lineSegment(point(1, 3), point(5, 4))),
                [{x: 1, y: 3}, {x:5, y:4}]
            );
            assert.deepEqual(
                boundingRect(lineSegment(point(6, 7), point(2, 1))),
                [{x:2, y:1}, {x:6, y:7}]
            );
            assert.deepEqual(
                boundingRect(lineSegment(point(2, 6), point(5, 1))),
                [{x:2, y:1}, {x:5, y:6}]
            )
        })
    });
});
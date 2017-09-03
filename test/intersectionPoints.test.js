import { assert } from "chai";
import { point, lineSegment } from "../src/constructors";
import { intersectionPoints } from "../src/intersectionPoints"

describe("intersectionPoints", function () {
    describe("line segments", function () {
        it("returns empty array if segments do not intersect", function () {
            assert.deepEqual(
                intersectionPoints(lineSegment(point(2, 2), point(4, 4)), lineSegment(point(0, 0), point(0, 1))),
                [],
                "line segments are part of one line"
            );

            assert.deepEqual(
                intersectionPoints(lineSegment(point(2, 2), point(4, 4)), lineSegment(point(3, 2), point(5, 4))),
                [],
                "line segments are parallel"
            );

            assert.deepEqual(
                intersectionPoints(lineSegment(point(0, 1), point(0, 4)), lineSegment(point(1, 1), point(1, 4))),
                [],
                "line segments are parallel and parallel to the y-axis"
            );

            assert.deepEqual(
                intersectionPoints(lineSegment(point(0, 1), point(0, 2)), lineSegment(point(1, 1), point(3, 3))),
                [],
                "only one of the segments is parallel to the y-axis"
            );

            assert.deepEqual(
                intersectionPoints(lineSegment(point(1, 1), point(2, 1)), lineSegment(point(3, 4), point(5, 8))),
                [],
                "line segments are not parallel"
            );
        });

        it("returns array containing line segment " +
            "if line segments are part of one line and intersect", function () {
            assert.deepEqual(
                intersectionPoints(lineSegment(point(1, 1), point(3, 3)), lineSegment(point(2, 2), point(4, 4))),
                [lineSegment(point(2, 2), point(3, 3))],
                "line is not parallel to y-axis"
            );

            assert.deepEqual(
                intersectionPoints(lineSegment(point(0, 1), point(0, 3)), lineSegment(point(0, 2), point(0, 4))),
                [lineSegment(point(0, 2), point(0, 3))],
                "line is parallel to y-axis"
            )
        });

        it("returns array containing one point if line segments intersect at one point", function () {
            assert.deepEqual(
                intersectionPoints(lineSegment(point(1, 1), point(3, 3)), lineSegment(point(3, 1), point(1, 3))),
                [point(2, 2)],
                "intersection point is in the middle of both lines"
            );

            assert.deepEqual(
                intersectionPoints(lineSegment(point(1, 1), point(3, 3)), lineSegment(point(1, 3), point(3, 3))),
                [point(3, 3)],
                "intersection point is an end of one segment"
            );

            assert.deepEqual(
                intersectionPoints(lineSegment(point(0, 1), point(0, 3)), lineSegment(point(-1, 2), point(1, 2))),
                [point(0, 2)],
                "one of the lines is parallel to the y-axis"
            );
        });
    })
});

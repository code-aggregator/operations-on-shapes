import { assert } from "chai";
import { segmentsIntersect, rectanglesIntersect } from "../src/intersections"
import { point } from "../src/constructors";

describe("segmentsIntersect", function () {
    it("returns true if segments intersect", function () {
        assert(segmentsIntersect([1, 3], [2, 4]), "first segment leftmost");
        assert(segmentsIntersect([3, 7], [2, 5]), "first segment rightmost");
        assert(segmentsIntersect([-2, 2], [-1, 1]), "first segment contains second");
        assert(segmentsIntersect([3, 6], [2, 7]), "first segment is contained by second");
        assert(segmentsIntersect([0, 5], [0, 6]), "segments have common limit");
        assert(segmentsIntersect([1, 3], [1, 3]), "segments are equal");
        assert(segmentsIntersect([2, 5], [5, 7]), "segments intersect on one point first leftmost");
        assert(segmentsIntersect([1, 2], [0, 1]), "segments intersect on one point first rightmost");
    });

    it("returns false if they don't", function () {
        assert.isNotOk(segmentsIntersect([1, 2], [3, 4]));
        assert.isNotOk(segmentsIntersect([3, 5], [-7, -6]));
    })
});

describe("rectanglesIntersect", function () {
    it("returns true if rectangles intersect", function () {
        assert(rectanglesIntersect([point(1, 2), point(4, 4)], [point(2, 3), point(3, 7)]));
    });

    it("returns false if they don't", function () {
        assert.isNotOk(rectanglesIntersect([point(1, 2), point(4, 4)], [point(5, 5), point(6, 7)]));
    });
});


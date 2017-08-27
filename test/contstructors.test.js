import { assert } from "chai";
import { point, pointInBasis, shape, lineSegment } from "../src/constructors";

describe("point", function () {
    it("creates object of the from {x: x, y: y} to represent a point", function () {
        assert.deepEqual(point(1, 2), {x: 1, y: 2});
    });
});

describe("pointInBasis", function () {
    it("creates object of the form {x:x1, y:y1} " +
        "where x1 and y1 are coordinates of (x, y) in basis e1, e2", function () {
        assert.deepEqual(pointInBasis(point(2, 4), [1, 0], [0, 1]), point(2, 4));
        assert.deepEqual(pointInBasis(point(4, 1), [4, 1], [0, 1]), point(1, 0));
        assert.deepEqual(pointInBasis(point(4, 1), [4, 1], [5, 10]), point(1, 0));
        assert.deepEqual(pointInBasis(point(4, 1), [0, 1], [4, 1]), point(-0, 1));
        assert.deepEqual(pointInBasis(point(0, 0), [234, 12], [42, 231]), point(0, 0));
        assert.deepEqual(pointInBasis(point(5, 6), [1, 0], [0, 6]), point(5, 1))
    });
});

describe("shape", function () {
    it("creates object describing arbitrary shape, " +
        "that contains shape's name and data representation", function () {
        assert.deepEqual(shape("circle", [0, 2]), {type: "circle", representation: [0, 2]});
    })
});

describe("lineSegment", function () {
    it("creates object that contains coordinates of a start and an end of a line segment," +
        "and also coefficients that define the line of which segment is part", function () {
        assert.deepEqual(lineSegment(point(2, 4), point(1, 1)), {
            type: "lineSegment",
            representation: {
                points: [{x: 2, y: 4}, {x: 1, y: 1}],
                coefs: {
                    a: 3,
                    b: -1,
                    c: 10
                }
            }
        })
    })
});
import { boundingRect } from "./boundingRectangle";
import { lineSegment } from "./constructors";

function lineSegmentsIntersectionPoints (
    {points: [start1, end1], coefs: coefs1},
    {points: [start2, end2], coefs: coefs2},
    lineSegmentsIntersect
) {
    return false;
}

let intersectionPointsFunc = {
    lineSegment: {
        lineSegment: lineSegmentsIntersectionPoints
    }
};

export function intersectionPoints (shape1, shape2, shapesIntersect = false) {
    return intersectionPointsFunc[shape1.type][ shape2.type](shape1, shape2, shapesIntersect);
}
import { point, pointInBasis } from "./constructors";
import { boundingRect } from "./boundingRectangles";

export function segmentsIntersect ([x1, y1], [x2, y2]) {
    return !((y1 < x2) || (y2 < x1))
}

export function rectanglesIntersect ([upLeft1, bottomRight1], [upLeft2, bottomRight2]) {
    return segmentsIntersect([upLeft1.x, bottomRight1.x], [upLeft2.x, bottomRight2.x]) &&
        segmentsIntersect([upLeft1.y, bottomRight1.y], [upLeft2.y, bottomRight2.y]);
}

function pointInSegment (p, [x, y]) {
    return Math.min(x, y) <= p <= Math.max(x, y)
}

/**
 * Checks if two line segments intersect
 * Expects that bounding rectangles of each segment intersect
 * @param start1
 * @param end1
 * @param start2
 * @param end2
 * @returns {boolean}
 */

function lineSegmentsIntersect ([start1, end1], [start2, end2]) {
    let deltaX1 = end1.x - start1.x;
    let deltaY1 = end1.y - start1.y;
    let deltaX2 = end2.x - start2.x;
    let deltaY2 = end2.y - start2.y;

    let c1 = deltaX1 * start1.x - deltaY1 * start1.y;
    let c2 = deltaX2 * start2.x - deltaY2 * start2.y;

    let determinant = deltaY2 * deltaX1 - deltaY1 * deltaX2;

    if (determinant === 0) {
        return c1 === c2
    }

    let intersectionPointY = deltaY2 * c1 - deltaY1 * c2;

    return pointInSegment(intersectionPointY, [start1.y, end1.y]) &&
        pointInSegment(intersectionPointY, [start2.y, end2.y])
}

let intersectionChecks = {
    lineSegment: {
        lineSegment: lineSegmentsIntersect
    }
};

export function shapesIntersect (shape1, shape2) {
    if ( !rectanglesIntersect(boundingRect(shape1), boundingRect(shape2)) ) {
        return false
    }

    return intersectionChecks[shape1.type][shape2.type](
        shape1.representation, shape2.representation
    );
}

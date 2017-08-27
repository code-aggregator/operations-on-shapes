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
    let basisX1 = end1.x - start1.x;
    let basisY1 = end1.y - start1.y;
    let basisX2 = end2.x - start2.x;
    let basisY2 = end2.y - start2.y;
    let translatedStart2 = point(start2.x - start1.x, start2.y - start1.y);

    if (basisX1 * basisY2 === basisX2 * basisY1) {
        let {y:newBasisY} = pointInBasis(
            translatedStart2, [basisX1, basisY1], [basisY2, -basisX2]
        );

        return newBasisY === 0;
    } else {
        let {x:newBasisX, y:newBasisY} = pointInBasis(
            translatedStart2, [basisX1, basisY1], [basisX2, basisY2]
        );

        return -1 <= newBasisY && newBasisY <= 0 && 0 <= newBasisX && newBasisX <= 1;
    }
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

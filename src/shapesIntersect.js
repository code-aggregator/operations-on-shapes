import { boundingRect } from "./boundingRectangle";

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

function lineSegmentsIntersect (
    {points: [start1, end1], coefs: coefs1}, 
    {points: [start2, end2], coefs: coefs2}
) {
    let determinant = coefs1.a * coefs2.b - coefs2.a * coefs1.b;

    if (determinant === 0) {
        return coefs1.c === coefs2.c
    }

    let intersectionPointY = (coefs1.a * coefs2.c - coefs2.a * coefs1.c)/determinant;

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

    return intersectionChecks[shape1.type][shape2.type](shape1, shape2);
}

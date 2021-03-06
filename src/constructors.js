export function point (x, y) {
    return {type: "point", x, y}
}

export function pointInBasis ({x, y}, [x11, x12], [x21, x22]) {
    let determinant = x11*x22 - x12*x21;

    return point(
        (x*x22 - y*x21)/determinant,
        (y*x11 - x*x12)/determinant
    )
}

export function lineSegment (start, end) {
    let deltaX = end.x - start.x;
    let deltaY = end.y - start.y;
    let c = deltaX * start.x - deltaY * start.y;

    return {
        type: "lineSegment",
        points: [start, end],
        coefs: {
            a: -deltaY,
            b: deltaX,
            c: c
        }
    };
}
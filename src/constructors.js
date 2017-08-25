export function point (x, y) {
    return {x, y}
}

export function pointInBasis ({x, y}, [x11, x12], [x21, x22]) {
    let determinant = x11*x22 - x12*x21;

    return point(
        (x*x22 - y*x21)/determinant,
        (y*x11 - x*x12)/determinant
    )
}

export function shape (type, representation) {
    return {type, representation}
}

export function lineSegment (start, end) {
    return shape("lineSegment", [start, end]);
}
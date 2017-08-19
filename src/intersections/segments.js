export function segmentsIntersect ([x, y], [x_1, y_1]) {
    return !((y < x_1) || (y_1 < x))
}


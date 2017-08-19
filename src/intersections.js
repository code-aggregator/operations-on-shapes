export function segmentsIntersect ([x, y], [x_1, y_1]) {
    return !((y < x_1) || (y_1 < x))
}

export function rectanglesIntersect ([upLeft1, bottomRight1], [upLeft2, bottomRight2]) {
    return segmentsIntersect([upLeft1.x, bottomRight1.x], [upLeft2.x, bottomRight2.x]) &&
        segmentsIntersect([upLeft1.y, bottomRight1.y], [upLeft2.y, bottomRight2.y]);
}

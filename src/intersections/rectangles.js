import segmentsIntersect from "./segments"

export default function rectanglesIntersect (a, b, c, d) {
    return segmentsIntersect([a[0], b[0]], [c[0], d[0]]) &&
        segmentsIntersect([a[1], b[1]], [c[1], d[1]]);
}

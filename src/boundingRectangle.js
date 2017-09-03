import { point } from "./constructors"

function lineSegmentBoundingRect ({ points: [{x, y}, {x:x1, y:y1}] }) {
    return [
        point(Math.min(x, x1), Math.min(y, y1)),
        point(Math.max(x, x1), Math.max(y, y1))
    ]
}

let shapeBoundingRectFunc = {
    lineSegment: lineSegmentBoundingRect
};

export function boundingRect (shape) {
    return shapeBoundingRectFunc[shape.type](shape);
}

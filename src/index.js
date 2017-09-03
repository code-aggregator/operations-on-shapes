import { rectanglesIntersect, lineSegmentsIntersect } from "./shapesIntersect";
import { point } from "./constructors"

rectanglesIntersect([{x: 1, y:2}, {x:2, y: 5}], [{x:3, y:8}, {x:6, y: 8}]);
console.log(lineSegmentsIntersect([point(0, 2), point(0, 4)], [point(-1, 1), point(1, 5)]));
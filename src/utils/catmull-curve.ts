
export type coordinateType = {
    x : number,
    y : number,
    z : number
}

export const catmullRomSpline3D = (points : coordinateType[], numPoints = 100) => {
    const result = [];
  
    // Helper function to calculate a single point on the spline
    const calculatePoint = (p0 : coordinateType, p1 : coordinateType, p2 : coordinateType, p3 : coordinateType, t : number) => {
      const t2 = t * t;
      const t3 = t * t2;
  
      // Interpolation for each axis (x, y, z)
      const x = 0.5 * (
        (2 * p1.x) +
        (-p0.x + p2.x) * t +
        (2 * p0.x - 5 * p1.x + 4 * p2.x - p3.x) * t2 +
        (-p0.x + 3 * p1.x - 3 * p2.x + p3.x) * t3
      );
  
      const y = 0.5 * (
        (2 * p1.y) +
        (-p0.y + p2.y) * t +
        (2 * p0.y - 5 * p1.y + 4 * p2.y - p3.y) * t2 +
        (-p0.y + 3 * p1.y - 3 * p2.y + p3.y) * t3
      );
  
      const z = 0.5 * (
        (2 * p1.z) +
        (-p0.z + p2.z) * t +
        (2 * p0.z - 5 * p1.z + 4 * p2.z - p3.z) * t2 +
        (-p0.z + 3 * p1.z - 3 * p2.z + p3.z) * t3
      );
  
      return { x, y, z };
    };
  
    // Iterate through the points and calculate the curve
    for (let i = 0; i < points.length -3; i++) {
    // let i = 0
      const p0 = points[i];
      const p1 = points[i + 1];
      const p2 = points[i + 2];
      const p3 = points[i + 3];
  
      // Generate intermediate points between each set of four points
      for (let t = 0; t <= 1; t += 1 / numPoints) {
        result.push(calculatePoint(p0, p1, p2, p3, t));
      }
    }
  
    return result;
}
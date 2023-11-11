import Vector from "../components/Vector/Vector";

export function getCheckCoords(cube: Vector[][], vectors: Vector[]) {
  const result = [];
  for (let i = 0; i < vectors.length; i++) {
    const t = vectors[i].getCoords().map(Math.round);
    for (let j = 0; j < cube[0].length; j++) {
      if (t.toString() === cube[0][j].getCoords().toString()) {
        result.push(i + 1);
      }
    }
  }
  return result;
}

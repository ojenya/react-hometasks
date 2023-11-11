import { useMemo } from "react";
import { cube, vertices } from "../consts";
import Matrix from "../components/Matrix/Matrix";
import { getCheckCoords } from "../utils/getCheckCoords";
import Vector from "../components/Vector/Vector";

export const useDiceAnswer = (x: number, y: number) => {
  const matrixY = Matrix.getRotationY(y * 90);
  const matrixX = Matrix.getRotationX(x * -90);

  const sceneVertices: Vector[] = vertices
    ?.map((vertice) => Matrix.multiplyVector(matrixY, vertice))
    ?.map((sceneVertice) => Matrix.multiplyVector(matrixX, sceneVertice));

  const result = getCheckCoords(cube, sceneVertices);

  const isOne = [
    result.includes(1),
    result.includes(4),
    result.includes(5),
    result.includes(8),
  ].every(Boolean);

  const sumOfVertices = result?.reduce((acc, cur) => (acc += cur), 0);

  return useMemo(() => {
    if (isOne) {
      return 1;
    } else {
      switch (sumOfVertices) {
        case 26:
          return 6;
        case 10:
          return 5;
        case 14:
          return 4;
        case 22:
          return 3;
        case 18:
          return 2;
      }
    }
  }, [x, y, sumOfVertices]);
};

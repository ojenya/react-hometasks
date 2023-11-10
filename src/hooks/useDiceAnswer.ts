import { useMemo } from "react";
import { cube, vertices } from "../consts";
import Matrix from "../components/Matrix/Matrix";
import { getCheckCoords } from "../utils/getCheckCoords";

export const useDiceAnswer = (x: number, y: number) => {
  /**
   * На сколько поворачивать по горизонтали слева направо
   * На сколько поворачивать по вертикали сверху вних
   **/

  let matrixY = Matrix.getRotationY(y * 90);
  let matrixX = Matrix.getRotationX(x * -90);

  const sceneVertices = [];
  const out = [];

  // TODO getSceneVertices
  for (let i = 0; i < vertices.length; i++) {
    let vertex = Matrix.multiplyVector(matrixY, vertices[i]);
    sceneVertices.push(vertex);
  }
  // TODO getOut
  for (let i = 0; i < sceneVertices.length; i++) {
    let vertex = Matrix.multiplyVector(matrixX, sceneVertices[i]);
    out.push(vertex);
  }

  const r = getCheckCoords(cube, out);

  const isOne = [
    r.includes(1),
    r.includes(4),
    r.includes(5),
    r.includes(8),
  ].every(Boolean);

  const sumOfVertices = r?.reduce((acc, cur) => (acc += cur), 0);

  return useMemo(() => {
    if (isOne) {
      return "one";
    } else {
      switch (sumOfVertices) {
        case 26:
          return "six";
        case 10:
          return "five";
        case 14:
          return "four";
        case 22:
          return "three";
        case 18:
          return "two";
      }
    }
  }, [x, y, sumOfVertices]);
};

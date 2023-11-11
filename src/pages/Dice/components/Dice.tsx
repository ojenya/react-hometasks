import React, { useEffect } from "react";
import { useRef, useState } from "react";
import * as S from "./Dice.styled";
import { useDiceAnswer } from "../../../hooks/useDiceAnswer";
import { getRandomDegrees } from "../../../utils/getRandomDegrees";

interface IDiceProps {}

export const Dice: React.FC<IDiceProps> = ({}) => {
  const cubeRef = useRef<HTMLDivElement>(null);

  const [xFlipCount, setXFlipCount] = useState(0);
  const [yFlipCount, setYFlipCount] = useState(0);

  const res = useDiceAnswer(xFlipCount, yFlipCount);

  const min = 0;
  const max = 10;

  const handleCubeClick = () => {
    const xRnd = getRandomDegrees(max, min);
    const yRnd = getRandomDegrees(max, min);
    const xCount = (xRnd / 90) % 4;
    const yCount = (yRnd / 90) % 4;

    if (cubeRef?.current?.style) {
      cubeRef.current.style.transform = `rotateX(${xRnd}deg) rotateY(${yRnd}deg) rotateZ(0deg)`;

      setXFlipCount(xCount);
      setYFlipCount(yCount);
    }
  };

  return (
    <>
      <S.Wrapper>
        <h1>Click the dice to roll</h1>
        <h2>Your score: {res}</h2>
        <S.Button onClick={handleCubeClick}>ROLL</S.Button>
        <S.Container>
          <S.Cube ref={cubeRef} onClick={handleCubeClick}>
            <S.One>
              <S.Dot className="dot1" />
            </S.One>
            <S.Two>
              <S.Dot className="dot1" />
              <S.Dot className="dot2" />
            </S.Two>
            <S.Three>
              <S.Dot className="dot1" />
              <S.Dot className="dot2" />
              <S.Dot className="dot3" />
            </S.Three>
            <S.Four>
              <S.Dot className="dot1" />
              <S.Dot className="dot2" />
              <S.Dot className="dot3" />
              <S.Dot className="dot4" />
            </S.Four>
            <S.Five>
              <S.Dot className="dot1" />
              <S.Dot className="dot2" />
              <S.Dot className="dot3" />
              <S.Dot className="dot4" />
              <S.Dot className="dot5" />
            </S.Five>
            <S.Six>
              <S.Dot className="dot1" />
              <S.Dot className="dot2" />
              <S.Dot className="dot3" />
              <S.Dot className="dot4" />
              <S.Dot className="dot5" />
              <S.Dot className="dot6" />
            </S.Six>
          </S.Cube>
        </S.Container>
      </S.Wrapper>
    </>
  );
};

export default Dice;

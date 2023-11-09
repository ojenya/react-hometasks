export const getRandomDegrees = (min: number, max: number) =>
  Math.floor(Math.random() * (max - min) + min) * 90;

export const calcBounds = direction => ({ size, position }) => {
  const index = direction === "x" ? 0 : 1;
  const bounds = [
    position[index] - size[index] / 2,
    position[index] + size[index] / 2
  ];
  return bounds;
};

const difference = (a, b) => a - b;
export const calcTargets = blocks => [
  blocks
    .map(block => calcBounds("x")(block))
    .flat()
    .sort(difference),
  blocks
    .map(block => calcBounds("y")(block))
    .flat()
    .sort(difference)
];

/**
 * The main Snap class.
 * @param {Object} config
 * @param {Array} blocks
 */
const Snap = class {
  constructor(config = {}, blocks = []) {}
};

export default Snap;

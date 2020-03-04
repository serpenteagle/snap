import inRange from "lodash/inRange";

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
 * @param {Object} config - The configuration object.
 * @param {Array} blocks - The blocks to add to the instance.
 */
class Snap {
  constructor(config = {}, blocks = []) {
    this._blocks = blocks;

    this._tolerance = config.tolerance === undefined ? 10 : config.tolerance;
  }

  /**
   * Adds a new block to the instance.
   * @param {Object} block - The block you want to add.
   */
  add(block) {
    this._blocks.push(block);
  }
  /**
   * Removes a block from the instance.
   * @param {String} blockId - the id of the block you want to remove.
   */
  remove(blockId) {
    this._blocks = this._blocks.filter(block => block.id !== blockId);
  }

  /**
   * Moves an existing block and updates its position value.
   * @param {String} blockId - The id of the block.
   * @param {Array} newPosition - The new position of the block.
   */
  move(blockId, newPosition) {
    this._blocks.find(block => blockId === block.id).position = newPosition;
  }

  /**
   * Returns the blocks defined on the instance.
   */
  getBlocks() {
    return this._blocks;
  }

  /**
   * Proposes a new position for a block and returns the first target match in both the x and y direction.
   * @param {String} blockId - The id of the block you want to propose a position change to.
   * @param {Array} newPosition - The new position you want to propose.
   * @returns {Array} An array containing the first target match in both the x and y directions.
   */
  propose(blockId, newPosition) {
    const block = this._blocks.find(block => block.id === blockId);
    const oldPosition = block.position;

    const siblings = this._blocks.filter(item => item.id !== blockId);
    const [xTargets, yTargets] = calcTargets(siblings);

    const xBounds = calcBounds("x")(block).map(
      bound => bound + newPosition[0] - oldPosition[0]
    );
    const yBounds = calcBounds("y")(block).map(
      bound => bound + newPosition[1] - oldPosition[1]
    );

    const xMatch = xTargets.find(
      target =>
        inRange(
          xBounds[0],
          target - this._tolerance / 2,
          target + this._tolerance / 2 + 1
        ) ||
        inRange(
          xBounds[1],
          target - this._tolerance / 2,
          target + this._tolerance / 2 + 1
        )
    );
    const yMatch = xTargets.find(
      target =>
        inRange(
          yBounds[0],
          target - this._tolerance / 2,
          target + this._tolerance / 2 + 1
        ) ||
        inRange(
          yBounds[1],
          target - this._tolerance / 2,
          target + this._tolerance / 2 + 1
        )
    );

    return [
      xMatch === undefined ? null : xMatch,
      yMatch === undefined ? null : yMatch
    ];
  }
}

export default Snap;

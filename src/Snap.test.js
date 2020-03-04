import Snap, { calcBounds, calcTargets } from "./Snap";

test("The vertical bounds of a 100 x 100 block positioned at (50, 50) should be 0 and 100.", () => {
  expect(
    calcBounds("x")({ id: "test", position: [50, 50], size: [100, 100] })
  ).toEqual([0, 100]);
});

test("The vertical bounds of a 100 x 100 block positioned at (-50, 50) should be -100 and 0.", () => {
  expect(
    calcBounds("x")({ id: "test", position: [-50, 50], size: [100, 100] })
  ).toEqual([-100, 0]);
});

test("The horizontal bounds of a 100 x 100 block positioned at (50, 50) should be 0 and 100.", () => {
  expect(
    calcBounds("y")({ id: "test", position: [50, 50], size: [100, 100] })
  ).toEqual([0, 100]);
});

test("The horizontal bounds of a 100 x 100 block positioned at (-50, 50) should be 0 and 100.", () => {
  expect(
    calcBounds("y")({ id: "test", position: [-50, 50], size: [100, 100] })
  ).toEqual([0, 100]);
});

/*----------------------------------------------------*/

const blocks = [
  { id: "1", position: [50, 50], size: [100, 100] },
  { id: "2", position: [100, 100], size: [40, 40] }
];
test("The snap targets for two blocks of sizes 100 x 100 and 40 x 40, and positions (50, 50) and (100, 100) respectively should be 0, 80, 100, and 120 in the x direction, and 0, 80, 100, and 120 in the y direction.", () => {
  expect(calcTargets(blocks)).toEqual([
    [0, 80, 100, 120],
    [0, 80, 100, 120]
  ]);
});

/*----------------------------------------------------*/

const snap = new Snap();
snap.add({ id: "1", size: [10, 10], position: [5, 5] });
snap.add({ id: "2", size: [10, 10], position: [25, 25] });
snap.add({ id: "3", size: [80, 100], position: [100, 200] });
snap.remove("3");

test("The snap instance should now only have 2 blocks; the removed block should not be in the instance.", () => {
  expect(snap.getBlocks().map(block => block.id)).toEqual(["1", "2"]);
});

test("Proposing the 2nd block to position (15, 25) should return a target match of 10 in the x direction", () => {
  expect(snap.propose("2", [15, 25])).toEqual([10, null]);
});

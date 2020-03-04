import { calcBounds, calcTargets } from "./Snap";

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

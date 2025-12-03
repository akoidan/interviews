import {fizzBuzz} from "./fluzzbuzz";

test("Fluzzbuzz", () => {

  let output = '';

  // Mock process.stdout.write
  const originalWrite = process.stdout.write;
  // @ts-ignore
  process.stdout.write = (inputs) => { output += inputs; };

  expect(output).toContain('Hello, Andrew!');

  fizzBuzz(15);
});

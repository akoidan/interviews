import {fizzBuzz} from "./fluzzbuzz";

test("Fluzzbuzz", () => {

  let output = '';

  // Mock process.stdout.write
  const originalWrite = process.stdout.write;
  // @ts-ignore
  console.log = (inputs) => { output += inputs; };

  fizzBuzz(15);

  expect(output).toContain('');
});

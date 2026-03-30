import {deserialize, serialize} from "./serialize-and-deserialize-binary-tree";


test("ex1 ", () => {
  const a = [1,2,3,null,null,4,5];
  const res = JSON.stringify(a);
  const tree = deserialize(res)
  expect(serialize(tree)).toEqual(JSON.stringify(a))
});



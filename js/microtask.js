
async function one() {
  console.log("Start one");
  await two();
  console.log("End one");
}
async function two() {
  console.log("two");
}
function run() {
  setTimeout(() => console.log("timeout"), 0);
  one();
  console.log('after one');
  new Promise(resolve => {
    console.log("Promise Resolved");
    resolve();
  }).then(() => console.log("Promise Then"));
  console.log('after promise')
}
run();

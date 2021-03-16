// @ts-nocheck
function test() {
  (this).start = function() {
    console.log('start')
  }

  (this).finish = function() {
    console.log('finish');
  }

  this.finish()
}

new test();

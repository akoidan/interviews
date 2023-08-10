// @ts-nocheck

function mainFn() {
  (this as any).start = function() {
    console.log('start')
  }

  (this as any).finish = function() {
    console.log('finish')
  }

  this.finish()
}

new mainFn();

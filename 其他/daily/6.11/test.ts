interface Counter {
  (start: number): string
  interval: number
  reset(): void
}

function getCounter(): Counter {
  // let counter = <Counter>function (start: number) {}
  let counter = function (start: number) {
    console.log(start)
  } as Counter
  counter.interval = 123
  counter.reset = function () {}
  return counter
}

let c = getCounter()
c(1)
c.interval = 10
c.reset

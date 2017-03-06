var $count = 0;

function main(i) {
  return Promise.resolve(0).then((r0) => {
    console.log(`[${i}] Promise0 count: ${$count}`);
    return Promise.resolve(1).then((r1) => {
      console.log(`[${i}] Promise1 count: ${$count}`);
      return Promise.resolve(2).then((r2) => {
        console.log(`[${i}] Promise2 count: ${$count}`);
        return new Promise((resolve, reject) => {
          $count++;
          setTimeout(() => {
            console.log(`[${i}] Promise3 count: ${$count}`);
            resolve([r0, r1, r2])
          }, Math.random() * $count * 1000);
        });
      });
    });
  });
}

// main().then(res => console.log(`res res res: ${res}`));

// Promise.resolve(0).then((r0) => {
//   return Promise.resolve(1).then((r1) => {
//     return new Promise((resolve, reject) => {
//       setTimeout(() => { resolve(111); }, 5000);
//     });
//   });
// }).then(res => console.log(`res res res: ${res}`));

for (let i = 0; i < 3; i++) {
  console.log(`i: ${i}`);
  main(i)
    .then(res => console.log(`[${i}] Result: ${res}, ${$count}`))
    .catch(err => console.error(err));
}

async function main() {
  var res = await Promise.resolve(0).then((r0) => {
    return Promise.resolve(1).then((r1) => {
      return Promise.resolve(2).then((r2) => {
        return [r0, r1, r2];
      });
    });
  });

  console.log(`Promise: ${res}`);

  var r0 = await Promise.resolve(0);
  var r1 = await Promise.resolve(1);
  var r2 = await Promise.resolve(2);

  console.log(`async/await: ${r0} ${r1} ${r2}`);
}  //=> [[0, 1, 2]]

main();

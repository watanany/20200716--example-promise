async function main() {
  var res = await Promise.resolve(0).then((r0) => {
    return Promise.resolve(1).then((r1) => {
      return Promise.resolve(2).then((r2) => {
        return [r0, r1, r2];
      });
    });
  });

  console.log(res);
}  //=> [[0, 1, 2]]

main();

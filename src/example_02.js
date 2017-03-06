function main() {
  //=> [[0, 1]]
  Promise.all([
    Promise.resolve(0).then((r0) => {
      return Promise.resolve(1).then((r1) => {
        return [r0, r1];
      });
    })
  ])
  .then((result) => {
    console.log(result);
  });
}

main();

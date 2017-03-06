async function main() {
  var res = await Promise.resolve(0).then((r0) => {
    return Promise.resolve(1).then((r1) => {
      return [r0, r1];
    });
  });

  console.log(res);
} //=> [[0, 1]]

main();

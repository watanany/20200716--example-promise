Promise.all([
    Promise.resolve(0).then((r0) => {
      return [r0];
    })
])
.then((result) => {
  console.log(result);
});

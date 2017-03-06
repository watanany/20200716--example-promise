function main() {
  let r0 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(0);
    }, Math.random() * 5 * 1000)
  });

  let r1 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(1);
    }, Math.random() * 10 * 1000)
  });

  let r2 = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(2);
    }, Math.random() * 8 * 1000)
  });

  return Promise.all([r0, r1, r2]);
}

main().then(res => console.log(`res res res: ${res}`));

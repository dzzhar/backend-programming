// Producing Promise
const persiapan = () => {
  // resolve akan diisi jika promise sukses terpenuhi
  // waktu dalam milisecond
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Menyiapkan Bahan...");
    }, 3000);
  });
};

const rebusAir = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Merebus Air...");
    }, 7000);
  });
};

const masak = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Memasak Mie...");
    }, 5000);
  });
};

// Consuming Promise
const main = () => {
  persiapan()
    .then((result) => {
      console.log(result);
      return rebusAir();
    })
    .then((result) => {
      console.log(result);
      return masak();
    })
    .then((result) => {
      console.log(result);
    });
};

main();

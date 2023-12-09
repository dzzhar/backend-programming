console.log("Satu");

// menerima 2 parameter yaitu callback dan waktu
// salah satu function yang berjalan di Asynchronous
setTimeout(() => {
  console.log("Dua");
}, 3000);

console.log("Tiga");

/**
 * output:
 * Satu
 * Tiga
 * Dua
 */

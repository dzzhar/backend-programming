// Producing Promise
function download() {
  return new Promise(function (resolve, reject) {
    const status = false;

    setTimeout(() => {
      if (status) {
        resolve("Download Selesai");
      } else {
        reject("Download Gagal");
      }
    }, 4000);
  });
}

// Consuming Promise
download()
  .then(function (result) {
    console.log(result);
  })
  .catch(function (result) {
    console.log(result);
  });

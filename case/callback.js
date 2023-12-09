// Producing
function persiapan() {
  console.log("Persiapan...");
}

function rebusAir() {
  console.log("Merebus Air...");
}

function masak() {
  console.log("Memasak Air");
}

// Consuming Callback
function main() {
  setTimeout(() => {
    persiapan();

    setTimeout(() => {
      rebusAir();

      setTimeout(() => {
        masak();
      }, 5000);
    }, 7000);
  }, 3000);
}

main();

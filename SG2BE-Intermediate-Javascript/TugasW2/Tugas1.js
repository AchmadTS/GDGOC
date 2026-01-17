function buatTeh(jenisTeh) {
  return new Promise((resolve, reject) => {
    console.log("Sedang merebus air... (Tunggu 2 detik)");

    setTimeout(() => {
      if (jenisTeh === "Gula Batu") {
        resolve("Teh Gula Batu Siap dinikmati!");
      } else {
        reject("Maaf, gula habis.");
      }
    }, 2000);
  });
}

buatTeh("Gula Batu")
  .then((pesan) => {
    console.log("✅", pesan);
  })
  .catch((error) => {
    console.log("❌", error);
  });

// Test case 2
setTimeout(() => {
  buatTeh("Gula Pasir")
    .then((pesan) => {
      console.log("✅", pesan);
    })
    .catch((error) => {
      console.log("❌", error);
    });
}, 3000);

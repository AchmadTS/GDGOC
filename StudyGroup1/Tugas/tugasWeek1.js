let judy = "Judy Hopps";
let nick = "Nick Wilde";

let jarakJudy = 3;
let jarakNick = 2;

let totalJudy = 0;
let totalNick = 0;

console.log("=== LATIHAN PENJAGA ZOOTOPIA ===");
console.log();
console.log("Jarak lari per hari:");
console.log(judy + ": " + jarakJudy + " km");
console.log(nick + ": " + jarakNick + " km");
console.log();

for (let hari = 1; hari <= 5; hari++) {
  console.log("Hari " + hari + ":");
  console.log("- " + judy + " lari " + jarakJudy + " km");
  console.log("- " + nick + " lari " + jarakNick + " km");
  console.log();

  totalJudy = totalJudy + jarakJudy;
  totalNick = totalNick + jarakNick;
}

console.log("=== TOTAL JARAK SELAMA 5 HARI ===");
console.log(judy + ": " + totalJudy + " km");
console.log(nick + ": " + totalNick + " km");

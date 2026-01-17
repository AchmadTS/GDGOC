let greetings = (nama) => console.log(`Halo ${nama}, Selamat Siang.`);
const dataNilai = {
  matkul: "Algoritma dan Pemrograman 1",
  nilai: 90,
  status: "Lulus",
};

const dataTambahan = { semester: 3, aktif: true };
const dataMahasiswa = { ...dataNilai, ...dataTambahan };
console.log("Data Mahasiswa:", dataMahasiswa);
greetings("Budi");
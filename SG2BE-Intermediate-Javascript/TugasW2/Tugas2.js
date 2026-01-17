async function getTodo() {
  try {
    console.log("Mencoba mengambil data ...");
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log("✅ Judul Todo:", data.title);
    console.log("--- Proses Selesai ---");
  } catch (error) {
    console.log("❌ Error:", error.message);
    console.log("--- Proses Selesai ---");
  }
}

getTodo();

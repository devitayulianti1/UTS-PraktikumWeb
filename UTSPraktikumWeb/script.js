// ===== Soal 3: JavaScript dan DOM =====
const tombol = document.getElementById("btnPesan");
const kotakPesan = document.getElementById("pesan");
const sambutan = document.getElementById("teksSambutan");

// console.log() minimal 2 informasi
console.log("Halaman berhasil dimuat");
console.log("Jumlah kegiatan kampus:", document.querySelectorAll(".card").length);

let jumlahKlik = 0;

tombol.addEventListener("click", function () {
  jumlahKlik++;

  // Menampilkan pesan pada halaman
  kotakPesan.hidden = false;
  kotakPesan.textContent = "Halo! Ini pesan dari JavaScript. Tombol sudah diklik " + jumlahKlik + " kali.";

  // Mengubah teks pada salah satu bagian halaman (DOM)
  sambutan.textContent = "Teks ini telah diubah menggunakan DOM. Selamat mengikuti kegiatan kampus!";

  console.log("Tombol diklik, jumlah klik:", jumlahKlik);
  console.log("Teks sambutan sekarang:", sambutan.textContent);
});
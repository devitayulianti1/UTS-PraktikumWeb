// ===== SOAL 3: JAVASCRIPT & DOM =====

const pesan = document.getElementById("pesan");
const tombol = document.getElementById("btn-cek");
const semuaCard = document.querySelectorAll(".card");

console.log("Halaman Perpustakaan Cendekia berhasil dimuat");
console.log("Jumlah layanan yang tersedia:", semuaCard.length);

// Cek apakah layanan buka pada hari & jam saat ini
function cekBuka(hariRange, jamBuka, jamTutup) {
  const sekarang = new Date();
  const hari = sekarang.getDay();   // 0 = Minggu ... 6 = Sabtu
  const jam = sekarang.getHours();
  const [awal, akhir] = hariRange.split("-").map(Number);
  return hari >= awal && hari <= akhir && jam >= jamBuka && jam < jamTutup;
}

tombol.addEventListener("click", function () {
  let isiPesan = "Informasi layanan perpustakaan saat ini:";
  let jumlahBuka = 0;

  semuaCard.forEach(function (card) {
    const elNama = card.querySelector(".nama-layanan");
    const elJam = card.querySelector(".jam-teks");

    // Simpan teks asli agar tidak bertumpuk saat tombol diklik berulang
    if (!elNama.dataset.asli) elNama.dataset.asli = elNama.textContent;
    if (!elJam.dataset.asli) elJam.dataset.asli = elJam.textContent;
    const namaAsli = elNama.dataset.asli;
    const jamAsli = elJam.dataset.asli;

    const buka = cekBuka(
      card.dataset.hari,
      Number(card.dataset.buka),
      Number(card.dataset.tutup)
    );
    if (buka) jumlahBuka++;

    // DOM: ubah teks nama layanan dan informasi jam layanan
    elNama.textContent = namaAsli + (buka ? " ✅" : " ⛔");
    elJam.textContent = jamAsli + (buka ? " (Sedang Buka)" : " (Sedang Tutup)");

    isiPesan += "\n• " + namaAsli + ": " + (buka ? "BUKA" : "TUTUP") + " (" + jamAsli + ")";

    // Console Browser (minimal 2 informasi)
    console.log("Nama layanan:", namaAsli);
    console.log("Jam layanan:", jamAsli);
    console.log("Status saat ini:", buka ? "Buka" : "Tutup");
  });

  // DOM: tampilkan pesan informasi layanan pada halaman
  pesan.hidden = false;
  pesan.classList.toggle("tutup", jumlahBuka === 0);
  pesan.textContent = isiPesan;
  pesan.scrollIntoView({ behavior: "smooth", block: "nearest" });

  console.log("Jumlah layanan yang sedang buka:", jumlahBuka);
});
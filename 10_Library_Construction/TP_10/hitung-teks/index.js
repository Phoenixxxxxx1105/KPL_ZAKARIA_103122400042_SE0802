// Fungsi untuk menghitung jumlah huruf (Hanya alfabet A-Z, spasi/simbol tidak dihitung)
export function hitungHuruf(teks) {
  // Menggunakan Regex untuk mencari semua huruf A-Z (besar dan kecil)
  const kecocokan = teks.match(/[a-zA-Z]/g);
  return kecocokan ? kecocokan.length : 0;
}

// Fungsi untuk menghitung jumlah kata
export function hitungKata(teks) {
  // Menghilangkan spasi berlebih di awal/akhir dan memecah berdasarkan spasi
  const teksBersih = teks.trim();
  if (teksBersih === "") return 0;
  return teksBersih.split(/\s+/).length;
}

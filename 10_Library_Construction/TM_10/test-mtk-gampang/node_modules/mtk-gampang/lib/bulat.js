export function bulat(x) {
  // Math.trunc memotong angka desimal tanpa melakukan pembulatan ke atas/bawah
  // Sehingga -4.25 menjadi -4, sesuai contoh di soal
  return Math.trunc(x); 
}
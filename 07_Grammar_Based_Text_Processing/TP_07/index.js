function toNumberArray(input) {
  let arr = [];
  
  // 1. Cek tipe input: apakah string atau array
  if (typeof input === 'string') {
    arr = input.split(','); // Pecah string berdasarkan koma
  } else if (Array.isArray(input)) {
    arr = input; // Langsung gunakan jika sudah berupa array
  }
  
  // 2. Proses penguraian dan penyaringan
  return arr
    .map(item => typeof item === 'string' ? item.trim() : item) // Bersihkan spasi kiri-kanan
    .filter(item => item !== "") // Buang string kosong (karena Number("") = 0, kita gak mau ini)
    .map(item => Number(item)) // Konversi ke tipe Number bawaan JS
    .filter(item => !Number.isNaN(item)); // Filter hasil NaN (seperti "abc23" yang gagal dikonversi)
}

// --- Pengujian ---
console.log(toNumberArray("1, 2"));                 // [1, 2]
console.log(toNumberArray(["1", "2"]));             // [1, 2]
console.log(toNumberArray(" 11,55,33  "));          // [11, 55, 33]
console.log(toNumberArray(["0.2", "-11", "abc23"]));// [0.2, -11]
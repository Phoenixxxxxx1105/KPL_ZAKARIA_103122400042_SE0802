// Mengimpor fungsi dari pustakamu
import { hitungHuruf, hitungKata } from './index.js';

const teksContoh = "Halo, nama saya Zakaria! 123";

console.log(`Teks yang diuji: "${teksContoh}"`);
console.log(`Jumlah Huruf (hanya A-Z):`, hitungHuruf(teksContoh));
console.log(`Jumlah Kata:`, hitungKata(teksContoh));
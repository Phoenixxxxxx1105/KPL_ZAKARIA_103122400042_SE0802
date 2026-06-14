// hitung.js

function tambahPengitung(terkini, jumlah = 1) {
    return terkini + jumlah;
}

function kurangPengitung(terkini, jumlah = 1) {
    return terkini - jumlah;
}

function kaliPengitung(terkini, faktor) {
    return terkini * faktor;
}

function bagiPengitung(terkini, pembagi) {
    if (pembagi === 0) {
        throw new Error("Tidak dapat membagi dengan nol");
    }
    return terkini / pembagi;
}

function resetPengitung() {
    return 0;
}

// Contoh penggunaan
let counter = 0;

console.log("Nilai awal :", counter);

counter = tambahPengitung(counter);
console.log("Tambah 1 :", counter);

counter = tambahPengitung(counter, 5);
console.log("Tambah 5 :", counter);

counter = kurangPengitung(counter, 2);
console.log("Kurang 2 :", counter);

counter = kaliPengitung(counter, 3);
console.log("Kali 3 :", counter);

counter = bagiPengitung(counter, 2);
console.log("Bagi 2 :", counter);

counter = resetPengitung();
console.log("Reset :", counter); 

export { tambahPengitung, kurangPengitung, kaliPengitung, bagiPengitung, resetPengitung };
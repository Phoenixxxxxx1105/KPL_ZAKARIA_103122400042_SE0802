//Fungsi untuk melakukan pembagian
function div(a, b) {
    //Prakondisi
    if (typeof a !== 'number' && typeof b !== 'number') {
        throw new TypeError("Salah tipe data untuk argumen a dan b");
}
    if (b === 0) {
        return 0;
    }

    const hasil = a / b;

    //Postkondisi
    if (hasil * b === a) {
        return hasil; 
    }
    
    return 0;
}

console.log(
    div(10, 2)
); 
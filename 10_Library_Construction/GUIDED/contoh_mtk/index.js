export function tambah(a, b) {
  return a + b;
}

export function kurang(a, b) {
  return a - b;
}

export function kali(a, b) {
  return a * b;
}

export function bagi(a, b) {
  return a / b;
}

export function pangkat(a, b) {
  return a ** b;
}

/**
 * @param {string} x
 * @param {number} a
 */
export function plsv_dua(x, a) {
  const coeff = parseInt (x);
  const balikkan_op = {
    ">=": "<=",
    "<=": ">=",
    ">": "<",
    "<": ">",
  }
  const op_baru = coeff < 9 ? balikkan_op
  [op] : op;

  return{
    "x": x,
    "dengan": op_baru,
    "hasil": bagi(a, coeff)
  }
}





/**
 * @param {string} x
 * @param {number} a
 * @param {number} b
 */
function plsv_tiga(x,a,b) {
  const k = b - a;
  if (x,length === 1) {
    return k;
  } else if (x,length === 2) {
    const v = parseInt(x);
    return bagi(k, v)
  }
  return 0;
}
// /**
//  * 
//  * @param {string} str 
//  */
// export function persamaan(str){
//     // cari 3x + 5 = 14
//     // Cari x
//     const sisiKanan = /\=(.*)/g;
//     const sisiKiri = /(.*)\=/g;
//     const sukuKiri = [];
//     const sukuKanan = [];

//     const kiri = sisiKanan.exec(str);
//     const kanan = sisiKiri.exec(str);

//     console.log(kiri);
//     console.log(kanan);
// }

// persamaan("3x + 5 = 14");
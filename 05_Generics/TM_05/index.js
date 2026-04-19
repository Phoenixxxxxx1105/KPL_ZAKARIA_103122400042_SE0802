/**
 * Mengevaluasi sebuah bilangan bulat dan mengembalikan string "Fizz", "Buzz", "FizzBuzz", 
 * atau bilangan itu sendiri sesuai dengan aturan FizzBuzz.
 *
 * @param {number} value - Data tunggal berupa bilangan bulat.
 * @returns {string|number} Mengembalikan "FizzBuzz" (habis dibagi 15), "Fizz" (habis dibagi 3), "Buzz" (habis dibagi 5), atau angka asli.
 */
function zzzzOrNum(value) {
  // Tambahkan validasi (exception) di sini
  if (typeof value !== 'number') {
    throw new Error("Input harus berupa bilangan bulat tunggal");
  }

  if (value % 15 === 0) {
    return "FizzBuzz";
  } else if (value % 3 === 0) {
    return "Fizz";
  } else if (value % 5 === 0) {
    return "Buzz";
  }
  return value;
}

/**
 * Menerima larik bilangan bulat dan mengembalikan larik baru yang elemennya 
 * sudah dievaluasi menggunakan fungsi zzzzOrNum (campuran string dan bilangan).
 *
 * @param {number[]} sequence - Larik yang semua elemennya terdiri dari bilangan bulat.
 * @returns {(string|number)[]} Larik hasil keluaran yang berisi campuran string dan bilangan.
 */
function fizzBuzz(sequence) {
  const newSequence = sequence.map((e) => zzzzOrNum(e));

  return newSequence;
}

module.exports = {
  fizzBuzz: fizzBuzz,
  zzzzOrNum: zzzzOrNum,
};
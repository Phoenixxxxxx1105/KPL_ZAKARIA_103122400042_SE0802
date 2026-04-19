/**
 *
 * @param {string} deret deretan bercirikan String
 * @return {string} 
 */

function fizzBuzz(deret) {
    /** @type {string} */
    let hasil = "";

    /** @type {Array<string>} */
    let deretLarik = deret.split(" ");

    for (const elemen of deretLarik) {
        /** @type {number} */
        const n = Number(elemen);
        
        /** @type {string} */
        let fz = "";

        //fizz
        if (n % 3 === 0) {
            fz += "Fizz";
        } 
        
        //Buzz
        if (n % 5 === 0) {
            fz += "Buzz";
        } 
       
        if (fz != '') {
           hasil += `${fz} `; 
           continue;
        }
        hasil += `${n} `;
    }
    return hasil;
}

console.log(
    fizzBuzz("1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17")
);
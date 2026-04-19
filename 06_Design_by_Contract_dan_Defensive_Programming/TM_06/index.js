function is_not_fizzbuzz(number) {
    if (!Number.isInteger(number)) {
        throw new TypeError("Input harus berupa bilangan bulat");
    }

    if (number % 3 === 0 || number % 5 === 0) {
        return false;
    }

    return true;
}

console.log(is_not_fizzbuzz(1)) // true
console.log(is_not_fizzbuzz(3)) // false
console.log(is_not_fizzbuzz(5)) // false
console.log(is_not_fizzbuzz(30)) // false
console.log(is_not_fizzbuzz(7)) // true


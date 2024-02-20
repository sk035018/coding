function isPrime(num) {
    if (num === 0 || num % 2 === 0) return false;

    for (let index = 3; index < Math.sqrt(num); index += 2) {
        if (num % index === 0) return false;
    }

    return true;
}

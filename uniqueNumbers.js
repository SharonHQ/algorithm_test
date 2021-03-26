//this function returns elements from the intersection between 2 arrays

const rokket = (array1, array2) =>
  [...array1, ...array2].reduce((unique, element) =>
    unique.includes(element) ? unique : [...unique, element], []);

console.log(rokket([1, 2, 5], [2, 1, 6])) // this outputs [1, 2, 5, 6]
console.log(rokket([1, 2, 3], [4, 5, 6])) // this outputs [1, 2, 3, 4, 5, 6]
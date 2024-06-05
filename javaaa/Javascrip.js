// Inverser une chaîne
function reverseString(str) {
  return str.split("").reverse().join("");
}

// Compter les caractères
function countChars(str) {
  return str.length;
}

// Mettre les mots en majuscule
function capitalizeWords(str) {
  const words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(" ");
}

// Rechercher le maximum
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

// Rechercher le minimum
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

// Calculer la somme d'un tableau
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

// Filtrer un tableau selon une condition donnée
function filterArray(numbers, condition) {
  const filteredArray = [];
  for (let i = 0; i < numbers.length; i++) {
    if (condition(numbers[i])) {
      filteredArray.push(numbers[i]);
    }
  }
  return filteredArray;
}

// Vérifier si un nombre est premier
function isPrime(num) {
  if (num <= 1) {
    return false;
  }
  for (let i = 2; i <= num / 2; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
}

// Calcule la factorielle d'un nombre donné
function factorial(num) {
  if (num === 0 || num === 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

// Générer la suite de Fibonacci jusqu'à un nombre donné de termes
function fibonacci(n) {
  const sequence = [0, 1];
  for (let i = 2; i < n; i++) {
    sequence.push(sequence[i - 1] + sequence[i - 2]);
  }
  return sequence;
}

// Exemples d'utilisation
console.log(reverseString("hello")); // affiche "olleh"
console.log(countChars("hello")); // affiche 5
console.log(capitalizeWords("the quick brown fox")); // affiche "The Quick Brown Fox"
console.log(findMax([1, 5, 2, 8, 3])); // affiche 8
console.log(findMin([1, 5, 2, 8, 3])); // affiche 1
console.log(sumArray([1, 2, 3, 4])); // affiche 10
console.log(filterArray([1, 2, 3, 4], x => x % 2 === 0)); // affiche [2, 4]
console.log(isPrime(7)); // affiche true
console.log(factorial(5)); // affiche 120
console.log(fibonacci(10)); // affiche [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]

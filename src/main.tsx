// task 35
// function multipltValues (obj: Record<string, number>, n:number): Record<string, number> {
//     const result: Record<string, number> = {}
//     for(const key in obj){
//         if(obj.hasOwnProperty(key)){
//             result[key] = obj[key] * n;
//         }
//     }
//     return result
// }
// const n = 5
// const obj = {a: 2, b: 3, c: 4}
// const res = multipltValues(obj, n)
// console.log(res);

// task 36
// function findNumber(str: string): number {
//     let count = 0
//     for (const char of str) {
//         if (!isNaN(Number(char))) {
//             count++
//         }
//     }
//     return count
// }
// const result = findNumber("Hello21")
// console.log(result);

// task 37
// const findTotalSum = (...number: number[]): number[] =>{
//     const sum = number.reduce((acc, curr)=> acc + curr, 0)
//     return Array.from(String(sum), Number)
// }
// const result = findTotalSum(1, 15, 6)
// console.log(result);

// task 38
// function findCharacter(str:string): number{
//     let res = 0
//     for(let i = 0; i < str.length; i++){
//         if(str[i] == "a"){
//             res += 1
//         }
//     }
//     return res
// }
// const result = findCharacter("salom")
// console.log(result);

// task 39
// function findPowerOfTwo(n: number): number | string {
//     if (n <= 0) {
//         return "n > 0 bo'lishi kerak.";
//     }
//     let k = 0;
//     let powerOfTwo = 1;

//     while (powerOfTwo < n) {
//         powerOfTwo *= 2;
//         k++;
//     }
//     if (powerOfTwo === n) {
//         return k;
//     } else {
//         return "n 2 ning darajasi emas.";
//     }
// }
// const n = 16;
// const result = findPowerOfTwo(n);
// console.log(`n = ${n}, k = ${result}`);

// task 40
// function findMiddleNumber(arr: number[]){
//     arr.sort((a, b) => a - b)
//     const middleIndex = Math.floor(arr.length / 2)
//     if(arr.length % 2 === 0){
//         return (arr[middleIndex - 1] + arr[middleIndex]) / 2
//     }else{
//         return arr[middleIndex]
//     }
// }
// const result = findMiddleNumber([1,2,3,4,5])
// console.log(result);

// task 41
// type Book = {
//     title: string;
//     author: string;
//     read: boolean;
// };

// const books: Book[] = [
//     {
//         title: "Halqa",
//         author: "Akrom Malik",
//         read: false,
//     },
//     {
//         title: "Dunyoning ishlari",
//         author: "O’tkir Hoshimov",
//         read: true,
//     },
//     {
//         title: "Iymon",
//         author: "Shayx Muhammad Sodiq Muhammad Yusuf",
//         read: true,
//     },
// ];

// books.forEach((book, index) => {
//     const status = book.read ? "o'qilgan" : "o'qilmagan";
//     const authorPrefix = book.author.includes("hazrat") ? "hazratlarining" : "ning";
//     console.log(`${index + 1}. ${book.author}${authorPrefix} ${book.title} kitobi ${status}`);
// });

// task 42
// function findTextLength(arr: string[]): {[key: string]: number}{
//     const result: {[key: string]: number} = {}
//     for(const item of arr){
//         result[item] = item.length;
//     }
//     return result
// }
// const result = findTextLength(['text', 'world', 'laptop'])
// console.log(result);

// task 43
// function multipltValues (obj: Record<string, number>, n:number): Record<string, number> {
//     const result: Record<string, number> = {}
//     for(const key in obj){
//         if(obj.hasOwnProperty(key)){
//             result[key] = obj[key] * n;
//         }
//     }
//     return result
// }
// const n = 5
// const obj = {a: 2, b: 3, c: 4}
// const res = multipltValues(obj, n)
// console.log(res);

// task 44
// function getLevel(n: number): number[] {
//     const result: number[] = [];
//     for (let i = 1; i <= n; i++) {
//         result.push(2 ** i);
//     }
//     return result;
// }
// console.log(getLevel(4));
// console.log(getLevel(5));


// task 45
// function countAnimals(animals: string[]): AnimalCount {
//   const animalCount: AnimalCount = {};
//   for (const animal of animals) {
//       if (animalCount[animal]) {
//           animalCount[animal]++;
//       } else {
//           animalCount[animal] = 1;
//       }
//   }
//   return animalCount;
// }
// const input = ['dog', 'chicken', 'cat', 'dog', 'chicken', 'chicken', 'rabbit'];
// const output = countAnimals(input);
// console.log(output);

// task 46
// function squareArray(arr: number[]): number[] {
//     return arr.map(num => num * num);
// }

// const inputArray: number[] = [1, 2, 3, 4, 5];
// const outputArray: number[] = squareArray(inputArray);

// console.log(outputArray);

// task 47
// const numbers: number[] = [1, -4, 12, 0, -3, 29, -150];
// const positiveSum = numbers
//   .filter(num => num > 0)
//   .reduce((accumulator, current) => accumulator + current, 0);
// console.log(positiveSum);

// task 48
// function getInitials(input: string): string {
//     return input
//         .split(' ')
//         .map(word => word.charAt(0))
//         .join('');
// }
// const input = 'George Raymond Richard Martin';
// const output = getInitials(input);
// console.log(output); 


// task 49
// type Person = {
//     name: string;
//     age: number;
// };





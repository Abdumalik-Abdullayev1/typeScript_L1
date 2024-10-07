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




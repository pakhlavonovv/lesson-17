// 1 misol

// function longestName(arr) {
//     if (arr.length === 0) return null; 

//     arr.sort((a, b) => b.length - a.length);

//     return arr[0];
// }
// console.log(longestName(["Alice", "Bob", "Christina", "David"])); 
// const longestWord = findLongestWord(arr);
// console.log(longestWord)

// 2 misol

// function removeConsecutiveDuplicates(str) {
//     let result = ""
//     result += str[0]

//     for(let i = 1; i < str.length; i++){
//         if(str[i] !== str[i - 1]){
//             result += str[i]
//         }
//     }
//     return result
// }

// console.log(removeConsecutiveDuplicates("aaabbbcccaaa")); // "abc"

// 3 misol

// function rotateArray(arr, k) {
//     let n = arr.length;
//     k = k % n;
//     let rotated = arr.slice(k).concat(arr.slice(0, k));
//     return rotated;
// }
// console.log(rotateArray([1, 2, 3, 4, 5], 2)); // [4, 5, 1, 2, 3]


// 4 misol

// function flattenArray(arr) {
//     let flatArr = arr.flat(Infinity)
//     console.log(flatArr)
// }
// console.log(flattenArray([[1, 2], [3, 4], [5]])); 

// 5 misol

// function multiplicationTable(n) {
//     let table = [];
//     for (let i = 1; i <= n; i++) {
//         let row = [];
//         for (let j = 1; j <= n; j++) {
//             row.push(i * j);
//         }
//         table.push(row);
//     }
//     return table;
// }
// console.log(multiplicationTable(3));

// 6 misol

// function splitArrayInHalf(arr) {
//     let center = arr.length / 2; 
//     let firstHalf = arr.slice(0, center);   
//     let secondHalf = arr.slice(center);   

//     return [firstHalf, secondHalf];
// }

// console.log(splitArrayInHalf([1, 2, 3, 4, 5]));
// console.log(splitArrayInHalf([1, 2, 3, 4]));   

// 7 misol

// function swapDiagonals(matrix) {
//     let n = matrix.length;

//     for (let i = 0; i < n; i++) {
//         let temp = matrix[i][i];
//         matrix[i][i] = matrix[i][n - 1 - i];
//         matrix[i][n - 1 - i] = temp;
//     }

//     return matrix;
//  }
 
//  console.log(swapDiagonals([
//      [1, 2, 3],
//      [4, 5, 6],
//      [7, 8, 9]
//  ]));


//  8 misol

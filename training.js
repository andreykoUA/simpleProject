// let n = 5;
// ascending triangle
// for (let i = 1; i <= n; i++) { // number of queries
//     let str = '';
//     for (let j = 1; j <= i; j++) {
//         str += '* ';
//     }
//     console.log(str);
// }
// * 
// * * 
// * * * 
// * * * * 
// * * * * *

// let n = 5;
// for (let i = 1; i <= n; i++) { // descending triangle
//     let str = '';
//     for (let j = i; j <= n; j++) {
//         str += '* ';
//     }
//     console.log(str);
// }
// * * * * * 
// * * * * 
// * * * 
// * * 
// * 

// let n = 5;
// for (let i = 1; i <= n; i++) { // pyramid 
//     let str = '';
//     for (let j = i; j <= n; j++) {
//         str += ' ';
//     }
//     for (let j = 1; j <= i; j++) {
//         str += '* ';
//     }
//     console.log(str);
// }
//      * 
//     * * 
//    * * * 
//   * * * * 
//  * * * * * 

// let n = 5;
// for (let i = 1; i <= n; i++) { // flipped ascending 
//     let str = '';
//     for (let j = i; j <= n; j++) {
//         str += '  ';
//     }
//     for (let j = 1; j <= i; j++) {
//         str += '* ';
//     }
//     console.log(str);
// }
// //           * 
// //         * * 
// //       * * * 
// //     * * * * 
// //   * * * * * 

// let n = 5;
// for (let i = 1; i <= n; i++) { // tree
//     let str = '';
//     for (let j = i; j <= n; j++) { // whitespaces at the beginning of query
//         str += '  ';
//     }
//     for (let j = 1; j < i; j++) { // j < i allws to print i - 1 amount of * 
//         str += '* ';
//     }
//     for (let j = 1; j <= i; j++) { // on each iteration amount of * = i  from left side
//         str += '* ';
//     }
//     console.log(str);
// }
// //           * 
// //         * * * 
// //       * * * * * 
// //     * * * * * * * 
// //   * * * * * * * * * 
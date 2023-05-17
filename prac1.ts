/**
 * @ params{add} num 배열
 *  */

const addition = (function () {
  function add(a: number, b: number) {
    return a + b;
  }

  function multiply(a: number, b: number) {
    return a * b;
  }

  return {
    add: add,
    multiply: multiply,
  };
})();
let c = [2, 3];
// console.log(addition(c));

// module.exports = additionModule;

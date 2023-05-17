// *매개변수를 배열로 받을 예정
// *typeof(arrayData)==string

function first(arrayData: string[], insertString: string): string[] {
  // 1
  arrayData.pop();
  // 2
  let combineArray: string[] = [];
  // 3
  combineArray = [insertString, ...arrayData];
  //4
  return combineArray;

  // *기존배열에 0번째를 최종적으로 바꿔주는 형태
  // *...전개연산자
  // * splice()
  // * reduce()
  // * map()
  // * push()
}

let data = ['인준', '재민', '유진'];
console.log(first(data, '혜윤'));
console.log();

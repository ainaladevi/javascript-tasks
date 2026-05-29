const nested = [1, [2, [3, [4, [5]]]]];
function flattenDeep(arr) {
  let stack = [...arr];
  let result = [];
  while (stack.length > 0) {
    let current = stack.pop();
    console.log("1,", current);
    if (Array.isArray(current)){
            stack.push(...current); 
            console.log("2",stack);       
    }else{
        result.push(current);
        console.log("3",result);

    }
  }
  return result.reverse();
}


console.log(flattenDeep(nested));

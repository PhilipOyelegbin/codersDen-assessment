const findMax = (...param) => {
  let maxNum = -Infinity;
  for(let i=0; i<param.length; i++) {
    if (param[i] > maxNum) {
      maxNum = param[i]
    }
  }
  return maxNum;
}

console.log(findMax(60, 219, 41));

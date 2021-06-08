export const map = (arr, fn) => {
  const mappedArr = [];
  for(let i = 0; i < arr.length; i++) {
    mappedArr[i] = fn(arr[i]);
  }
  return mappedArr;
};


export const filter = (arr, fn) => {
  const filteredArr = [];
  for(let i = 0; i < arr.length; i++) {
    if(fn(arr[i])) {
      filteredArr[i] = arr[i];
    }
  }
  console.log(filteredArr);
  return filteredArr;
};

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
      filteredArr[filteredArr.length] = arr[i];
    }
  }
  return filteredArr;
};

export const findIndex = (arr, fn) => {
  for(let i = 0; i < arr[i].length; i++) {
    if(fn(arr[i])) {
      arr.length = i;
      const index = arr.length;
      return index;
    }
  }
};

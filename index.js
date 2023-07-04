/* eslint-disable require-jsdoc */
function mergeSort(arr) {
  const mid = Math.floor(arr.length / 2);
  if (mid === 0) {
    const arrSize1 = [];
    arrSize1.push(arr[mid]);
    return arrSize1;
  }
  let arr1 = [];
  let arr2 = [];
  for (let i = 0; i < arr.length; i++) {
    if (i < mid) {
      arr1.push(arr[i]);
    } else arr2.push(arr[i]);
  }
  arr1 = mergeSort(arr1);
  arr2 = mergeSort(arr2);
  let newArr = [];
  let arr1Ind = 0;
  let arr2Ind = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr1Ind >= arr1.length) {
      if (arr2Ind < arr2.length) {
        newArr.push(arr2[arr2Ind]);
        arr2Ind++;
      }
    } else if (arr2Ind >= arr2.length) {
      if (arr1Ind < arr1.length) {
        newArr.push(arr1[arr1Ind]);
        arr1Ind++;
      }
    } else if (arr1[arr1Ind] <= arr2[arr2Ind]) {
      newArr.push(arr1[arr1Ind]);
      arr1Ind++;
    } else {
      newArr.push(arr2[arr2Ind]);
      arr2Ind++;
    }
  }
  return newArr;
}
console.log(mergeSort([12, 12, 13, 11, 12, 12]));

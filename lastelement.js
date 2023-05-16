

function lastElements(arr, n) {
    if (n === undefined || n >= arr.length) {
      return arr[arr.length - 1];
    } else if (n <= 0) {
      return [];
    } else {
      return arr.slice(-n);
    }
  }
  let arr=[10,15,20,25,30,35,40,45,50];
  console.log(lastElements(arr));
  console.log(lastElements(arr, 2));
  
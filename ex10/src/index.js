function myBouncer(arr) {
  for (var i = arr.length - 1; i >= 0; i--) {
    if (
      Number.isNaN(arr[i]) ||
      (typeof arr[i] == "boolean" && arr[i] == false) ||
      arr[i] == "" ||
      arr[i] == 0 ||
      arr[i] == null ||
      typeof arr[i] == "undefined"
    ) {
      arr.splice(i, 1);
    }
  }
  return arr;
}

console.log(myBouncer([7, "ate", "", false, 9]));
console.log(myBouncer(["a", "b", "c"]));
console.log(myBouncer([false, null, 0, NaN, undefined, ""]));
console.log(myBouncer([null, NaN, 1, 2, undefined]));

module.exports = myBouncer;

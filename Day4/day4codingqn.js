let x = [1, 2, 3, 4, 5, 6, 7];
let newx;
newx = x.map((ele, idx, arrx) => {
  if (idx == 0) {
    return ele;
  }
  arrx[idx] += arrx[idx - 1];
  console.log(arrx[idx]);
  return ele + arrx[idx - 1];
});
console.log(newx);
console.log(x);

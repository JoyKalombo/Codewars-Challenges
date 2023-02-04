function arrayDiff(a, b) {
    let holderArray = []
  for (i = 0; i < a.length; i++) {
      if (b.indexOf(a[i]) == -1) {
          holderArray.push(a[i])
      }
  }
//   console.log(holderArray)
  return holderArray
}

// arrayDiff([1,2,2,2,2,3,4,5,6,6,7,7,7,8], [2, 5, 7])
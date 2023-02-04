function divisors(integer) {
    let holderArray = []
  if (integer <= 1) {
      return 0
  } else if (integer > 1) {
      for (i = 2; i < integer; i++) {
          if (integer % i == 0) {
              holderArray.push(i)
          }
      }
  }
  if (holderArray.length == 0) {
//       console.log(integer + " is prime")
      return integer + " is prime"
  } else if (holderArray.length > 0) {
//       console.log(holderArray)
      return holderArray
  }
}

// divisors(38)
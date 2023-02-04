function nearestSq(n) {
    if (Math.sqrt(n)%1 == 0) {
//         console.log(n)
        return n
    } else {
        let countUp = 0
    let numIteratorUp = n
    do {
        countUp ++
        numIteratorUp ++
    } while (Math.sqrt(numIteratorUp)%1 != 0)

    let countDown = 0
    let numIteratorDown = n
    do {
        countDown ++
        numIteratorDown --
    } while (Math.sqrt(numIteratorDown)%1 != 0)

    if (countUp < countDown) {
//         console.log(numIteratorUp)
        return numIteratorUp
    } else if (countUp > countDown) {
//         console.log(numIteratorDown)
        return numIteratorDown
    }
    }
    
    
}

// nearestSquareNumber(6)
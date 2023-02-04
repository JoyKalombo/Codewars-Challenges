var countBits = function(n) {
    let count = 0
    let binary = (n >>> 0).toString(2)
    for (i = 0; i < binary.length; i++) {
        if (binary[i] == '1') {
            count ++
        }
    }
    console.log(binary)
    console.log(count)
    return count
  
};

countBits(24)
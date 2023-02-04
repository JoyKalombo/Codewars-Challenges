function solution(str){
    holderString = ""
    for (i = str.length - 1; i>=0; i--) {
        holderString += str[i]
    }
    console.log(holderString)
    return holderString
}

solution("hawiej")
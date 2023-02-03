function solution(str){
    let holderString = '' //adding the string to an empty string
    let count = 0  //keeping track of counting the elements added to the empty string
    let array = [] //keeping track of an empty array where the pairs of strings will be added
    for (i = 0; i < str.length; i++) {
      holderString += str[i].toString()
      count ++  // this for loop runs through the string and exracts characters 
     //  console.log(holderString)
      if (count == 2) {
        array.push(holderString)
        holderString = ''
        count = 0 // for every pair of characters extracted, we then reset the count and holderString
      } else if (i == str.length - 1 && str.length%2 == 1) {
          array.push(holderString)
      }
    }
 //   console.log(array)
   if (str.length % 2 != 0){
     array[array.indexOf(array[array.length - 1])] = array[array.length - 1] + '_'
    // in this if statement, we add the '_' to the last character if it is not in a pair
   }
   
 //   console.log(array)
   return array
 }
 
 // solution('behave')
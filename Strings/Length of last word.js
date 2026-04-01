//58. Length of Last Word



var lengthOfLastWord = function (s) {

  //approach 1
    // s=s.trim()
    // let arr=s.split(" ")
    // return arr[arr.length-1].length

    //approach 2
    // let n= s.length-1
    // while(n>=0){
    //     if(s[n] == " "){
    //         --n
    //     }
    //     else{
    //         break
    //     }
    // }
    // let count=0
    // while(n>=0){
    //     if(s[n] !==  " "){
    //         count++
    //         --n
    //     }
    //     else if(s[n] == " "){
    //         break
    //     }
    // }
    // return count
    
  let n = s.length - 1;
  let count = 0;
  while (n >= 0) {
    if (s[n] != " ") {
      count++;
    } else if (count > 0) {
      break;
    }
    --n;
  }
  return count;
};

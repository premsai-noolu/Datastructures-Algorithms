//136. Single Number

var singleNumber = function (nums) {
  // let hash ={}
  // for (let i=0;i<nums.length;i++){
  //     if (hash[nums[i]]){
  //         hash[nums[i]]++
  //     }
  //     else{
  //         hash[nums[i]]=1
  //     }
  // }
  // for (let i=0;i<nums.length;i++){
  //     if (hash[nums[i]] == 1){
  //         return nums[i]
  //     }
  // }

  let xor = 0;
  for (let i = 0; i < nums.length; i++) {
    xor = xor ^ nums[i];
  }
  return xor;
};

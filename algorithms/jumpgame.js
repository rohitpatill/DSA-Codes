var jump = function(nums) {
    let reachfar = 0;
    let jumps = 0;
    let current = 0;
    
    if (nums.length === 1) {
      return 0;
    }
    
    for (let i = 0; i < nums.length; i++) {
      reachfar = Math.max(reachfar, i + nums[i]);
      if (current >= nums.length - 1) {
        break;
      }
      if (i === current) {
        current = reachfar;
        jumps++;
      }
    }
    return jumps;
  };
  let nums = [2, 3, 1, 1, 4 ];
  let result = jump(nums);
  console.log(result);  // Output: 2
    
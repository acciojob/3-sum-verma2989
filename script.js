function threeSum(arr, target) {
   let closestSum = Number.MAX_VALUE;
 
    
    for(let i = 0; i < arr.length ; i++)
    {
        for(let j =i + 1; j < arr.length; j++)
        {
            for(let k =j + 1; k < arr.length; k++)
            {
                 
                // Update the closestSum
                if (Math.abs(target - closestSum) >
                    Math.abs(target - (arr[i] + arr[j] + arr[k])))
                    closestSum = (arr[i] + arr[j] + arr[k]);
            }
        }
    }
     
    // Return the closest sum found
    return closestSum;
  //your code here
}

module.exports = threeSum;

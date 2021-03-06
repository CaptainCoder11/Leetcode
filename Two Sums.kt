/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.

 

Example 1:

Input: nums = [2,7,11,15], target = 9
Output: [0,1]
Output: Because nums[0] + nums[1] == 9, we return [0, 1].
*/
 

class Solution {
    fun twoSum(nums: IntArray, target: Int): IntArray {
        var answer =  ArrayList<Int>();
        var answerMap =  HashMap<Int, Int>()
        for(i in 0..nums.size-1)
        {
            var diff = target - nums[i]
            if(answerMap.contains(diff))
            {
                answer.add(answerMap.get(diff)!!)
                answer.add(i)
            }
            answerMap.set(nums[i],i)
        }
      return answer.toIntArray();  
    }
   
}
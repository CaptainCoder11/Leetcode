


//Time complexity O(n2)
var lengthOfLongestSubstring = function(str) {
    var n = str.length;
    
   var res = 0;
    
   for(var i = 0; i < n; i++) // 0 1 2 3 4 5 
   {
       var visited = new Array(256).fill(false)
        
       for(var j = i; j < n; j++)   // 0-5,1-5,2-5,3-5,4-5,5-5
       {
            
           // If current character is visited
           // Break the loop
           if (visited[str.charAt(j)] == true)
               break;

           // Else update the result if
           // this window is larger, and mark
           // current character as visited.
           else
           {
               res = Math.max(res, j - i + 1); 
               visited[str.charAt(j)] = true;
           }
       }

       // Remove the first character of previous
       // window
       visited[str.charAt(i)] = false;
   }
   return res;
};

//Time Complexity O(n)
var lengthOfLongestSubstring = function(s) {
    let hashMap = {};
  let subStr = 0;
  let longestSubStr = 0;
  for (let charIdx = 0; charIdx < s.length; charIdx++) {
    let theChar = s[charIdx];
    if (!hashMap.hasOwnProperty(theChar)) {
      hashMap[theChar] = charIdx;
      subStr++;
    } else {
      longestSubStr = Math.max(longestSubStr, subStr);
      subStr = charIdx - hashMap[theChar] > subStr ? subStr + 1 : charIdx - hashMap[theChar];
    
      hashMap[theChar] = charIdx;
    }
  }

  return Math.max(longestSubStr, subStr);
};


 

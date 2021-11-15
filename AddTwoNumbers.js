/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

*/

var addTwoNumbers = function(l1, l2) {  
    let list = new ListNode(0);
    let currentNode = list;
      
    var carry = 0;
    var sum = 0;
    while(l1 || l2 || sum > 0)
    {
       
        if(l1!=null)
        {
         sum += l1.val
         l1 = l1.next   
        }  
        if(l2!=null)
        {
         sum+= l2.val
         l2 = l2.next   
        } 
        carry = Math.floor(sum / 10)
        currentNode.next = new ListNode(sum%10)
        currentNode = currentNode.next;
      
        sum = carry
        carry = 0
       
    }
     return list.next
      
  };
  
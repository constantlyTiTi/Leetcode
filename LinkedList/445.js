var addTwoNumbers = function(l1, l2) {
    l1 = reverse(l1);
    l2 = reverse(l2);
    
    
     //initialize head    
    let l3Start = l1.val+l2.val;
    
    let l3 = l3Start > 9 ? new ListNode(l3Start%10, new ListNode(l3Start/10 | 0)) : new ListNode(l3Start);
    let l3Ref = l3;
    
    while(l1.next || l2.next){

        let resVal = 0;
        
        if(l1.next && l2.next){
            resVal = l1.next.val + l2.next.val;
            l1 = l1.next;
            l2 = l2.next;
        }
        
        else if(!l1.next && l2.next){
            resVal = l2.next.val;
            l2 = l2.next;
        }
        
        else if(l1.next && !l2.next){
            resVal = l1.next.val;
            l1 = l1.next;
        }
       
        //calculate the sum of current node values, if the next.val should be added if next is not null
        resVal = l3Ref.next ? resVal + l3Ref.next.val : resVal;

        if(resVal > 9){
            l3Ref.next = new ListNode(resVal%10, new ListNode(resVal/10 | 0));
            
        }
        else{
            l3Ref.next = new ListNode(resVal);
        }

        l3Ref = l3Ref.next;
        
    }
    
    return reverse(l3);

};

let reverse = (listNode) =>{
    let res = [];
    
    while(listNode){
        res.push(listNode);
        listNode = listNode.next;
    }

    let resNode = new ListNode(res.pop().val);
    let resNodeRef = resNode;

    while(res.length > 0){
        resNodeRef.next = new ListNode(res.pop().val);
        resNodeRef = resNodeRef.next;
    }
    
    return resNode;
}
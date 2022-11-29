

function getMathResult(first,second) {
    if(typeof second !== 'number' || second <= 0){
        return first;
    }else{
        let i = first;
        let result = i+"---";
        
        while(i<first*second){
            i = i + first;
            if(i===first*second){
                result = result + i;
            }
            else{result = result + (i+"---");}
            
        }
        return result;
        
    }
}

getMathResult();
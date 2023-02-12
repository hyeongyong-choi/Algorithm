function solution(left, right) {
    let number = 0;
    
    for(let i=left; i<=right; i++){
        let answer = []
       for(let j=1; j<=i; j++){
        // answer.push(i)
           if(i%j === 0){
                answer.push(j)
           }
       }
        answer.length % 2 === 0? number+=i : number-=i 
        
    }
    return number;
    
    // return answer;
}
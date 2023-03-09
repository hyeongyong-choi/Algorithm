function solution(s) {
    let obj=[]
    
    let answer=[]
    for(let i =0;i<s.length;i++){
        console.log(obj[s[i]])
        if(obj[s[i]]===undefined){
            answer.push(-1)
            obj[s[i]]=i
            console.log(obj) 
        }else{
            answer.push(i-obj[s[i]])
            obj[s[i]]=i
        }
    }
    return answer;
}
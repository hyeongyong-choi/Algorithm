function solution(n) {
    
    let answer = n.toString(3)
    let splitanswer = parseInt(answer.split("").reverse().join(""),3)
    
    return splitanswer;
}
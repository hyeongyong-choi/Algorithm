function solution(s){
    let numbers = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
    let answer = s 

    for(let i=0; i<numbers.length; i++){
    let array = answer.split(numbers[i])
    answer = array.join(i)
    }
    return Number(answer)
    
}

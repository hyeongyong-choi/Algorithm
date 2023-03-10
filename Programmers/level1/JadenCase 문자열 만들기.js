function solution(s) {
    var answer = '';
    
    let result = s.split(" ");
    let result2 = result.map(x => x.substr(0,1).toUpperCase() + x.substr(1).toLowerCase())

    answer = result2.join(' ')
    
    return answer;
}
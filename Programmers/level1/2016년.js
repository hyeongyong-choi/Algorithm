function solution(a, b) {
    let answer = ''
    let day = 0
    let dayList = ['FRI','SAT','SUN','MON','TUE','WED','THU'];
    let monthArr = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
    
    for(let i=1; i<a; i++){
        day += monthArr[i-1]
    }
    day += b-1
    answer = dayList[day % 7]
    
    return answer;
}
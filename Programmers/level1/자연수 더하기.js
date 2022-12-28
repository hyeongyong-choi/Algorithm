
function solution(n)
{
    let answer = 0;
    let answer_s=String(n);

    for(let i=0; i<answer_s.length; i++){
        answer+=parseInt(answer_s[i]);
    }
    return answer;
}


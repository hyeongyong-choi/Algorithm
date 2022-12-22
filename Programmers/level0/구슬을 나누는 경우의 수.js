function solution(balls, share) {
    var answer = choice(balls) / (choice(balls-share) * choice(share))
    return answer;
}

function choice(num) {
    let ret = BigInt(1);
    for(let i=2; i<=num ; i++){
        ret *= BigInt(i);
    }
    return ret;
}
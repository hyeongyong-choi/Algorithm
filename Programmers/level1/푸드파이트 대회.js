function solution(food) {
    var answer = '';
    let left =[]

    food.forEach((number,index) => {
        if(number >= 2){
            let n = Math.floor(number / 2);
            left.push(String(index).repeat(n))
        }
    })
    amswer = [left.join(""),0,left.reverse().join("")]

    return amswer.join("");
}
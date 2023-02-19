function solution(n,m){
    let answer = []

    let max = 0
    let min = 0

    let num = n > m ? n: m;

    //최대공약수
    for(let i =1; i<= num; i++){
        if(n % i == 0 && m% i == 0){
            max = i
        }
    }
    //최소 공배수  
    //두수의 곱 = 최대공약수 * 최소공배수
    min = n * m / max
    answer = [max , min]
    
    return answer
}
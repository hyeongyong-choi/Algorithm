function solution(x) {
    
    reduce = String(x).split('').reduce((acc , cur)=> acc+Number(cur) , 0)
    reduceX = x % reduce
    
    if (reduceX === 0){
        return true
    }else{
        return false
    }
    

}
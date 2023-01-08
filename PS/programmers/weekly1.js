function solution(price, money, count) {
    var answer = 0;
    
    // 원래 이용료 : price
    // 회수 : count

    // 가지고 있는 금액에 비해서, 얼마나 모자라는지 return 
    // N배로 가격이 불어남.
    // (3,20,4) => 10
    
    // 3+6+9+12 => 30 - 20 => 10
    let sum = 0;
    for(let i=1; i<=count; i++) {
       sum += (price * i) 
        
    }
    
    let lack = sum - money; // 부족한 금액
   
    if(lack <= 0) return answer; // should be there to pass TC no.4
    else {
        
        return lack;
    }
    
    
}

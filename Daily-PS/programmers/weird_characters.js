function solution(s) {
    let arr = [];
     
    let word = s.split(' ');
    // let letter = ''
    for(let i=0; i<word.length; i++) {
    let letter = ''
        for(let j=0; j<word[i].length; j++) {
            if(j % 2 ==0) letter += word[i][j].toUpperCase()
            else letter += word[i][j].toLowerCase();
        }
    arr.push(letter)
    }
    
     console.log(arr.join(' '))
    return arr.join(' ')
     
     
 }
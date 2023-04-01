/* 3번 문제 답안을 작성해주세요. */
function solution(n) {
    let ans = 1;

    for(let i = 1; i <= n; i++){
        ans *= i;
        
        if(ans === n){
            return i;
        }
        
        if(ans > n){
            return i - 1;
        }
    }
}
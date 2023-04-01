/* 2번 문제 답안을 작성해주세요. */
function solution(num_list) {
    let even_count=0;
    let odd_count=0;
    
    for(let i=0; i<num_list.length; i++){
        if(num_list[i]%2===0){
            even_count++;
        }
        else{
            odd_count++;
        }
    }
    let array =[];
    array.push(even_count);
    array.push(odd_count);
    return array;
}
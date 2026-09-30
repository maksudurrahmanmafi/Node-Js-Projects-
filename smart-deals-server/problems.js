/* const arr = [12, 45, 7, 89, 34, 23];
let mx = arr[0];
for( num of arr){
    if(num>mx){
        mx = num;
    }

}
console.log(mx); */

function countVowels(str){
    const vowels = ['a', 'e', 'i', 'o', 'u', 'A', 'E', 'I', 'O', 'U'];
    let count = 0;
    for(let char of str){
        if(vowels.includes(char)){
            count++;
        }
    }
    console.log(count);
    
}

countVowels("JavaScript is awesome");
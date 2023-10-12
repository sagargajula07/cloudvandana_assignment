const arr1 = [54,23,12,97,100]; 
function arrSort(arr) { 
    arr.sort((a,b)=>a-b); 
    arr.reverse(); 
    return arr; 
} 

console.log(arrSort(arr1));
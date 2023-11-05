//basic example without map:
//mmultiply each element with array
var arr=[1,2,3,4,5,6]
var result=[];
for(var i=0;i<arr.length;i++){

  //  arr[i]=arr[i]*2;
    result.push(arr[i]*2);

}
console.log(result);

//with map-normal function
 
const ar=[2,5,6,78,9];
function double(element){

    return element*2;

}

const result1=ar.map(double)
console.log(result1);
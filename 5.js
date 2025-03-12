var arr=[1,2,3,4,2,5];
var newarr=new Set(arr);
if(newarr.size != arr.length)
    console.log("True,The array contains duplicate elements");
else
    console.log("False");

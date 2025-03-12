var arr1=[1,2,3,4,5];
var arr2=[1,3,5,7,9];
var set1=new Set(arr1);
var set2=new Set(arr2);
var inter=[];
for(var num of set1)
{
    if(set2.has(num))
    {
        inter.push(num);
    }
}
console.log(inter);
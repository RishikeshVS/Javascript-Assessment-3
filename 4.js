var nums=[3,2,2,3];
var remove=3;
for(var i=0;i<nums.length;i++)
{
    if(nums[i]==remove)
    {
        delete nums[i];
    }
}
nums.shift();
console.log(nums);
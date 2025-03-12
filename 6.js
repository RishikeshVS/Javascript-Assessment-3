var num=38;
while(num>=10)
{
    var sum=0;
    var digits=num.toString();
    for(var digit of digits)
    {
        sum=sum+Number(digit);
    }
    num=sum;
}
console.log(num);
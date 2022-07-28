function reversenum(num)
{
    var digit,result=0;
    while(num!=0)
    {
        digit=num%10;
        result = (result*10)+digit;
        num=Math.floor(num/10);
    }
    return result;
}
var num = prompt("Enter the number to be reversed: ");
console.log(reversenum(num));

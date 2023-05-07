var ayush = [91,54,12,46,24,67,21,78,20]

// Facebook Database  >= 1000000000000000000



for(let i=0; i<ayush.length; i++)
{
    if(ayush[i]==67)
    {
        console.log("Found")
    }
}
var arr =[1,2,3,4,5,6,7,8,9,10]
let left = 0, right = 10;
while(left<=right)
{
    let mid = Math.floor((left+right)/2);
    if(arr[mid]==4)
    {
        console.log("found");
        break;
    }
    if(arr[mid]>4)
    {
        right = mid-1;
    }
    if(arr[mid]<4)
    {
        left = mid+1;
    }
}
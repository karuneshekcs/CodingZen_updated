/* let fetch = require('cross-fetch')
let fs = require('fs') */




// Functions ka matlab hota hai ek block of code jiska kuch kaam specific kaam hota hai, jo reusable hoga. Apne aap wo code run nhi hoga


function printAyush()
{
    console.log("Ayush")
    console.log("Ayush")
    console.log("Ayush")
    console.log("Ayush")
}



// Function wale block ka code hm function ko call karke karwate hai
printAyush() // Iska matlab hmne function ko call kiya hai

function print2Table()
{
    for(let i=1; i<=10; i++)
    {
        console.log(2*i);
    }
}
print2Table()


// Ye jo hm function banate time placeholder ki tarah pass karte hai usko parameter
function checkOddOrEven(a)
{
       if(a%2==0)
       {
          console.log(a + " is an even number")

       }
       else
       {
        console.log(a + " is an odd number")
       }
}



checkOddOrEven(10);
checkOddOrEven(21);
checkOddOrEven(50);
checkOddOrEven(17);


function sum(a,b)
{
    console.log("Sum of a and b is " + (a+b).toString());
}


sum(10,20);
sum(90, 100);

/*
function getHtmlCode(url)
{

    fetch(url).then((res)=>{
        return res.text()
    }).then((f_res)=>{
        fs.writeFile("test.html", f_res, (err)=>{
            if(err)
            console.log(err)
            else
            console.log("New file created")
        })
    })

}


getHtmlCode("https://todo-ayush-ekcs.netlify.app")
getHtmlCode("https://shehabeditz.com/")

*/

function ayush()
{
    var result  = 1
    for(let i=1; i<=30; i++)
    {
        result = result* 2;
    }
     return result;
     console.log("Ayush")
}


var sol = ayush()
console.log(sol)






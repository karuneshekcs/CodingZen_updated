// Javascripts Strings
// 1. Single quotes 
// 2. Double quotes
// 3. back tick
 
 
var a = "Ayush"
var b = 'Sunil'
var c = `Abhishek`
var d = "Hello my name is " + a + " and " + b + " " + c + " are my students"
console.log(d)
var d = `Hello my name is ${a} and ${b} ${c} are my students.`  // String literals
console.log(d);
 
var a = "10"
var b = 20
var c = "30"
var d = 40
 
console.log(b+d) // 60
console.log(a+b) // 1020
console.log(a+c) //1030
console.log(b+a) //2010
//  Agar ek string aur ek number hoga ko add krenge toh number ko string mein convert krke concatinate krdega
var d = "Ayush"
console.log(d.length)
 
// Searching, Replacement, Substring methods
// String kaatne wale methods
var a = "abcdefghijklmnopqrstuvwxyz" // ye string aisey hi rhega, is string mein se ek choti si string kaat ke nayi string banani hai
 
var b = a.substring(1,8) // isme first parameter mein dete hai ki starting index aur second parameter mein end index + 1
console.log(a)
console.log(b)
 
var c = a.slice(1,8) // Same as substring method
console.log(c)
 
 
var d = a.substr(0,5); // Is method mein 1st parameter hoga ki kis index se katna start karna hai, aur second parameter hoga ki kitte next character kaatne hai
console.log(d)
 
// String search karne wale methods
 
var a = "Hello my name is Ayush, and I do coding sometimes and sleep most of the time."
var d = a.search("coding")  // Search method returns index of first occurance of the matching string
console.log(d)
 
// Agar wo matching string mila nahi given string mein toh kya hoga -1 return .search() method
 
var e = a.indexOf("coding")
console.log(e)
 
 
// Replacement karne wale methods
var a = "Hello my name is robot. hello my hu ek udta robot doremon."
var d = a.replace("robot", "Ayush")
console.log(d)
 
 
var e = a.replaceAll("robot", "Ayush")
console.log(e)
 
 
// Upper case lower case methods
var a = "Test"
var b = a.toUpperCase()
console.log(b)
 
var c = a.toLowerCase()
console.log(c)
 
// Split method aur join methods
 
var a = "ayush,sunil,abhishek,abrar,karunesh"
var arr = a.split(",")
console.log(arr)
for(let i=0; i<arr.length; i++)
{
    console.log(arr[i]);
}
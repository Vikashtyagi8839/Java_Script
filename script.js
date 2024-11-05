console.log("Hello World!");

//Arithmetic  Operators (+,-,/,*)
/* 
1.Modulus (%)
2.Exponentiation   (**)
3.Increment (++)
4.Decrement (--)
 */

let a = 5
let b = 3
console.log("a = ", a , " & b  =", b);
console.log("a + b = " , a + b);
console.log("a - b = " , a - b);
console.log("a * b = " , a * b);
console.log("a / b = " , a / b);
console.log("a % b = " , a % b) // Modulus
console.log("a ** b = " ,  a ** b); // Exponentiation


 // Unary  Operators [a++, a-- , ++a , --a ]

 // post  increment and  decrement

 a++; // post  increment
 console.log("a++ = ", a++ );
 console.log("a = ", a);

 a--; //  post decrement
 console.log("a-- = ", a-- );
 console.log("a = ", a);

 // Pre Increment and Decrement

 ++a; // pre  increment
 console.log("++a = ", ++a ); 
 console.log("a = ", a);

 --a; // pre decrement
 console.log("--a = ", --a )
 console.log("a = ", a);

 //Assignment opertors [ +=, -= , *= , /= , %= , **= ]

 let c = 5;
 let d = 2;

 c += 4; // c = c += 4
 console.log("c =",c); //9


 //Comparison  Operators [ == , != , === , !== , > , < , >= , <= ]
 
let x = 5;
let y = 2;
console.log("x == y =", x == y); // false
console.log("x != y =", x != y); //true
console.log("x === y =", x === y); //false
console.log("x !== y =", x !== y); // true
console.log("x > y =", x > y); // true
console.log("x < y =", x < y); // false

//Logical Operators  [ && , || , ! ]

let q = 2;
let w = 3;
console.log("q && w =", q < w  &&  q === 2); 
console.log("q || w =", q < w  ||  q === 2); 
console.log("!q =", !q); // false

//Conditional Statements

let age = 20;
if(age >= 18) {
    console.log("You can vote");
}
if (age < 18) {
    console.log("You cannot vote");
}
let number = 4;
age = 20;
if (number == 1) 
    {
    console.log("A");
}
else if  (number == 2)
    {
    console.log("B");
}
else if (number == 3)
{
    console.log("C");
}
else if (number == 4){
    if (age>16) 
    console.log("D");
}
else  {
    console.log("E");
}
//Switch Case
let num = 3;
switch(num)
{
    case 1: console.log("A")
    break;
    case 2: console.log("B")
    break;
    case 3: console.log("C")
    break;
    case 4: console.log("D")
    break;
    default : console.log("E")
}















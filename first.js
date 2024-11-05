let fullName = "Tony Stark"
console.log(fullName)
let age = 24;
console.log(age)
let Price = 120.50;
console.log(Price)
let a = null;
console.log(a)
let x = undefined;
console.log(x)
isFollow = true;
console.log(isFollow)

 /* Collection of data  ko object bolte h*/
 const student = {
fullName: "Vikash Tyagi",
age: 23,
cgpa: 8.5,
isPass: true,
 };
/*agr kl ko merko data change krna ho object ka naam aur jo usme change krna h keys ka naam in wali brackets me[]*/
/*let ko hum update ker skte h lekin const vaiable ko nhi per ha const object ki keys ko change ker skte h*/
student["age"] = student["age"] + 1;
 console.log(student.age) ;

/*question of instagram page*/
 const profile = {
    Username: "Vikash Tyagi",
    follow: 100,
    followers: 200,
    posts: 30,
 };
 console.log(typeof  profile ["Username"]);
 


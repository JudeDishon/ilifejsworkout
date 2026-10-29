// console.log out put type

// console.log("hi")
// console.warn("hi")
// console.error("hi")
// alert("hi")
// prompt("hi")
// confirm("hi")
// document.write("hi")





// variable "var" redeclare and reassign
// var name ="jude"
// var name ="jude1"
// name="jude2"
// console.log(name)

// vaiable "let" cannot be redeclare but can reassign
// let name1 ="jude"
// let name1 ="jude1" // cannot redeclare
// name1="jude2" // can reassign
// console.log(name1)

//  variable "const" cannot be redeclare and reassign
// const name1 ="jude"
// const name1 ="jude1" // cannot redeclare
// name1="jude2" // cannot reassign
// console.log(name1)




// Data types 
// string , number , boolean , object{object,array, new Date ,null}

// var name = "jude" 
// console.log(typeof(name)); // string
// var age = 20
// console.log(typeof(age)); // number
// var isActive = false
// console.log(typeof(isActive)); // boolean
// var obj={
//     name:"jude",age:23, address:{city:"trichy",area:"melur"}}
//     console.log(obj)
//     console.log(obj.age)
//     console.log(obj.address.city)
//     console.log(typeof(obj));  // Object
// var fruits= ["apple",1,{city:"trichy",area:"melur"}]
//  console.log(fruits[2].area)
//  console.log(typeof(fruits))  //arry but object nu katum
    

// operators 
// arithmetic operator (+,-,*,/,%)
// assignment (+=,-=)
// comparison (> , < ,>= ,<= ,== , !=,===,!===)
 // logical (&&,||,!)
//  unary (+,-)
// ternary (condition ? treu statement : false statement)

// console.log(40+20)    //arithmetic op
// var a=10;
// a=a+1
// console.log(a+=1);  //assignment op
// var b = 10;
// var c ="10";
// console.log(b==c)   //comprasion op
// console.log(b===c)   //comprasion op

// console.log ( 10 < 0 && 30 < 40)  //logical op
// console.log ( 10 < 0 || 30 < 40)   //logical op
// console.log (! ( 10 < 0 || 30 < 40) )   //logical op

// var a = 10  
// var b=10
// console.log(a++)    //unary op
// console.log(++b)    //unary op

// console.log(10>20 ?"correct":"wrong")  //terinary op


// number--method

    // <!-- toFixed() , Number() , isNaN() , isFinite() , parseInt() , parseFloat() , Math.sqrt() , Math.ceil() , Math.floor() , Math.random() -->


    // var a = 1000
    // console.log(a.toFixed())    //toFixed
    // a=Number(a)              //Number()
    // console.log(typeof(a)) 
    // console.log(typeof(Number(a.toFixed())))
    // console.log(isNaN(a))   //isNan
    // console.log(isFinite(a)) //isFinite()
    // console.log(parseInt(a))   //ParseInt()
    // console.log(parseFloat(a))  //ParseFloat()
    // console.log(Math.sqrt(a))   //math.sqrt()
    // console.log(Math.floor(a))   //Math.floor
    // console.log(Math.floor(Math.random()))  //math.random


//  string method
    //  <!-- length  , indexOf , charAt , includes , toUpperCase , toLowerCase ,substr, replace , trimStart , trimEnd , trim , toString  -->
    
    // var b = "hello world"
    //  console.log(b.length)   //length()
    //  console.log(b.indexOf("j"))  //indexof()
    //  console.log(b.charAt())   //charAt()
    // console.log(b.includes('j'))  //includes()
    // console.log(b.toUpperCase())  //upper and lower
    // console.log(b.substr(0,5))  //substr
    // console.log(b.replace("j","y"))  replace
    // console.log(b.trim())   //trimEnd,start,trim
    //  console.log(typeof(b.toString()))   //toString()
    

    // DOM 
//    var data = document.querySelector("div")
//    data.innerText="<h1>hello</h2>"
function signupfun(e){
e.preventDefault()
 let signname =document.getElementById("signname").value
 let signemail = document.getElementById("signemail").value
 let signpassword = document.getElementById("signpassword").value

 console.log(signname,signemail,signpassword)

 localStorage.setItem("name",signname)
 localStorage.setItem("email",signemail)
 localStorage.setItem("password",signpassword)

 window.location.href="../../index.html"
}

function loginfun(e){
    e.preventDefault()
    let loginname =document.getElementById("login-name").value
    let loginpassword =document.getElementById("login-password").value
    console.log(loginname,loginpassword)  

    let signname = localStorage.getItem("name")
    let signpassword = localStorage.getItem("password")

    if(loginname==signname || loginpassword==signpassword){
        window.location.href="./assets/page/home.html"
    }
    else{
        alert("invalid password and username")
    }
}   
  
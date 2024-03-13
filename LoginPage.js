function validation(){
    var uname = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var fname = localStorage.getItem("fname");
    var lname = localStorage.getItem("lname");
    var checkpass = localStorage.getItem("pass");
    var username = fname+""+lname;
    console.log(username)
    console.log(checkpass)
    if(uname == username && password == checkpass){
        open("./homePage.html");
    }
    else{
        document.getElementById("mismatch").innerHTML=`Invalid UserName or Password`;
    }
}
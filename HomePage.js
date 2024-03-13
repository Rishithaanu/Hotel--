function fun(){
    localStorage.removeItem("fname");
    localStorage.removeItem("lname");
    localStorage.removeItem("mNo");
    localStorage.removeItem("dob");
    localStorage.removeItem("email");
    localStorage.removeItem("pass");
    localStorage.removeItem("repass");
    localStorage.removeItem("name");
    localStorage.removeItem("password");
    // document.getElementById("fun").innerHTML=`LogOut Successfull!`;
    // document.getElementById("fun").style.color="white"
    open("./signup.html");   
}
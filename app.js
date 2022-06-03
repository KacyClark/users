//object constructor
function User(email,password,fname,lname){
    this.email= email;
    this.password= password;
    this.firstName= fname;
    this.lastName= lname;
}
//register function
function register(){
    let userName = $("#txtEmail").val();
    let userPass = $("#txtPassword").val();
    let userFirstName = $("#txtFirstName").val();
    let userLastName = $("#txtLastName").val();

 
    //creating the obj
    let newUser = new User(userName,userPass,userFirstName,userLastName);
    //clear the inputs
    $("input").val("");
    console.log(newUser);
}
function init(){
    console.log("Register");
}

window.onload-=init;
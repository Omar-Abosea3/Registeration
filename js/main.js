var registiration=document.getElementById("registiration");
var SignUpName=document.getElementById("SignUpName");
var SignUpEmail=document.getElementById("SignUpEmail");
var SignUpPassword=document.getElementById("SignUpPassword");
var loginEmail=document.getElementById("loginEmail");
var loginPassword=document.getElementById("loginPassword");
var afterEmail=document.getElementById("afterEmail");
var afterPassword=document.getElementById("afterPassword");
var afterName=document.getElementById("afterName");
var statusOfSignUp=document.getElementById("statusOfSignUp");
var allUsers=[];
console.log();
var allUsersName="";
if(localStorage.getItem("allUsersName")!=""){
    allUsersName = JSON.parse(localStorage.getItem("allUsersName"));
}
if(localStorage.getItem("allUsers")!=null){
    allUsers=JSON.parse(localStorage.getItem("allUsers"))
}
var myName
var myStr="";
var userSignUp;
var userLogin;
registiration.addEventListener('click',function(){
    if(registiration.innerHTML=="SignUp"){
         userSignUp={
            name:SignUpName.value,
            email:SignUpEmail.value,
            password:SignUpPassword.value,
        };
        if(allUsers.length==0 && testEmail()==true){
            allUsers.push(userSignUp);
            localStorage.setItem("allUsers", JSON.stringify(allUsers));
            clearingSignUp();
            statusOfSignUp.classList.add("text-success");
            statusOfSignUp.innerHTML="success";
        }else if(isEmailExist()==false){
            statusOfSignUp.classList.remove("text-success");
            statusOfSignUp.style.color="red";
            statusOfSignUp.innerHTML="Email is already Exist!";
        }else if(testEmail()==true){
            allUsers.push(userSignUp);
            localStorage.setItem("allUsers", JSON.stringify(allUsers));
            clearingSignUp();
            statusOfSignUp.classList.add("text-success");
            statusOfSignUp.innerHTML="success";
        }else{
            statusOfSignUp.classList.remove("text-success");
            statusOfSignUp.style.color="red";
            statusOfSignUp.innerHTML="Enter A Valid Data!";
        }
        
    
        
    }else if(registiration.innerHTML=="Login"){
        userLogin={
            email:loginEmail.value,
            password:loginPassword.value,
        };
            if(login()==true){
                afterEmail.innerHTML="Email is valid";
                afterEmail.setAttribute("class","text-success");
                afterPassword.innerHTML="Password is correct!";
                afterPassword.setAttribute("class","text-success");
                registiration.setAttribute("href","./Your page/yourPage.html");
                localStorage.setItem("allUsersName",JSON.stringify(myName));
            }else if(userLogin.email==myStr && userLogin.password==myStr){
                afterEmail.innerHTML="Email is requierd!";
                afterEmail.setAttribute("class","text-warning");
                afterPassword.innerHTML="Password is requaierd!";
                afterPassword.setAttribute("class","text-warning");
            }else{
                statusOfSignUp.style.color="red";
                statusOfSignUp.innerHTML="Enter A Valid password or email!";
                afterPassword.setAttribute("class","d-none");
                afterEmail.setAttribute("class","d-none");
            }
  }
})

function clearingSignUp(){
    SignUpName.value="";
    SignUpEmail.value="";
    SignUpPassword.value="";
}


console.log(allUsers);


function isEmailExist(){
    for(var j = 0 ; j<allUsers.length ; j++){
    if(userSignUp.email.toLowerCase()==allUsers[j].email.toLowerCase()){
        return false;
        }
    }
}


function testEmail(){
    if(userSignUp.email!=myStr && userSignUp.name!=myStr && userSignUp.password != myStr){
        return true;
    }
}

function login(){
    for(var i =0 ; i<allUsers.length ; i++){
        myName =allUsers[i].name;
    if(userLogin.email.toLowerCase()==allUsers[i].email.toLowerCase()&&userLogin.password==allUsers[i].password){
        return true;
    }
}
}

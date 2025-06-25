   const email = document.querySelector("#email")
   const password = document.querySelector("#password")
   const button = document.querySelector(".btn1")
   const userLogin = {
    email: "appclick@gmail.com",
    password: "1234AppClick",
   };
   button.addEventListener("click", function(){ 
    const useremail = email.value;
    const  userpassword = password.value;
    if  (useremail === userLogin.email && userpassword === userLogin.password) {
    alert("Successful")
    } else{
    alert("Wrong Details");
    }
   });


   const add = document.querySelector(".add")
   const remove = document.querySelector(".remove")
   let number = 0;
   add.addEventListener("click", function(){
    number++;
    document.querySelector(".number").textContent = number;
   });

   remove.addEventListener("click", function(){
    if (number > 0){
    number--;
    document.querySelector(".number").textContent = number;}
   });
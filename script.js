const countDay = document.getElementById("day");
const countHour = document.getElementById("hours");
const countMinute = document.getElementById("minute");
const countSecond = document.getElementById("seconds");
const userName = document.getElementById("name");
const userMail = document.getElementById("email");
const userPhone = document.getElementById("phone");
const userCompany = document.getElementById("company");
const submitButton = document.querySelector(".signup-button");
const submitForm = document.getElementById("sign-form");
// const errorIcon = document.querySelector(".error-icon");
// const SuccessIcon = document.querySelector(".success-icon");

// Counting down to 
let countDownTimeDate = new Date("November 01, 2022 14:00:30").getTime();

// Update countdown
let countDownTime = setInterval(() => {
    let currentTime = new Date().getTime();
    let remainingTime = countDownTimeDate - currentTime;
    
    daysleft = Math.floor(remainingTime/(1000 * 60 * 60 * 24));
    hoursleft = Math.floor((remainingTime % (1000 * 60 * 60 * 24))/(1000 * 60 * 60));
    minutesleft = Math.trunc((remainingTime % (1000 * 60 * 60))/(1000 * 60));
    secondsleft = Math.trunc((remainingTime % (1000 * 60))/1000);

    // display time
    countDay.innerHTML = daysleft;
    countHour.innerHTML = hoursleft;
    countMinute.innerHTML = minutesleft;
    countSecond.innerHTML = secondsleft;

    if (remainingTime <= 0){
        clearInterval(countDownTime);
    }

}, "1000")

// Form Validation
console.log(submitButton)

  
        function nameCheck () {
            if (userName.value =="") {
                document.querySelector(".name-hr").style.border = "1px solid red";
                document.querySelector(".form-control").className = "error-icon";
            } else {
                document.querySelector(".name-hr").style.border = "1px solid green"; 
                document.querySelector(".form-control").className = "success-icon";
            } 
        }
       
        function mailCheck (){
            if (userMail.value =="") {
                document.querySelector(".email-hr").style.border = "1px solid red";
                document.querySelector(".form-control").className = "error-icon";
            } else {
                document.querySelector(".email-hr").style.border = "1px solid green"; 
                document.querySelector(".form-control").className = "success-icon";
            }
        }
        
        function phoneCheck () {
            if (userPhone.value =="") {
                document.querySelector(".phone-hr").style.border = "1px solid red";
                document.querySelector(".form-control").className = "error-icon";
    
            } else {
                document.querySelector(".phone-hr").style.border = "1px solid green";
                document.querySelector(".form-control").className = "success-icon";
            }
        }
        
        function companyCheck () {
            if (userCompany.value =="") {
                document.querySelector(".company-hr").style.border = "1px solid red";
                document.querySelector(".form-control").className = "error-icon";
            } else {
                document.querySelector(".company-hr").style.border = "1px solid green"; 
                document.querySelector(".form-control").className = "success-icon";
            }
        }
        
        function validation() {
            if (userName && userMail && userPhone && userCompany){
                
            }
        }

    userName.addEventListener("keyup", nameCheck);
    userMail.addEventListener("keyup", mailCheck);
    userPhone.addEventListener("keyup", phoneCheck);
    userCompany.addEventListener("keyup", companyCheck);
    submitButton.addEventListener("click", validation);   
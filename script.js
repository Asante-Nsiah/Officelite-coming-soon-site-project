const countDay = document.getElementById("day");
const countHour = document.getElementById("hours");
const countMinute = document.getElementById("minute");
const countSecond = document.getElementById("seconds");
const UserName = document.getElementById("name");
const UserMail = document.getElementById("email");
const UserPhone = document.getElementById("phone");
const UserCompany = document.getElementById("company");

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

const setError = (element, message) => {
    const errorDisplay = 
}
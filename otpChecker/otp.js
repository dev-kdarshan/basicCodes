let genrate = document.querySelector(".generate");
let check = document.querySelector(".check");
let input = document.querySelector(".otp_entered");
let min = 1000
let max = 9999
let otp_generated;

genrate.addEventListener("click",()=>{
    otp_generated = Math.floor(Math.random() * (max - min + 1)) + min;
    alert("YOUR OTP IS : "+ otp_generated)
})

check.addEventListener("click",()=>{
    let otp_check = document.querySelector(".otp_entered").value;
    console.log(otp_check)
    console.log(otp_generated)
    if(otp_check == otp_generated){
        alert("correct")
    }
    else{
        alert("reenter")
    } 
    input.value = ""
})

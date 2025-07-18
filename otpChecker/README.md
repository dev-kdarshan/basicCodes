# OTP Checker

A basic OTP (One-Time Password) checker created using HTML, CSS, and JavaScript. It generates a 4-digit OTP and validates the user input against it.

## Features

- 4-digit random OTP generation (range: 1000–9999)
- Alert-based OTP display
- Input field to enter OTP
- Real-time validation with success and error alerts
- Reset input after each attempt

## Technologies Used

- HTML
- CSS
- JavaScript 

## How It Works

- Clicking the **Generate OTP** button creates a random 4-digit OTP and displays it via an alert box.
- The user enters the OTP in the input field and clicks **Check OTP**.
- If the entered OTP matches the generated one, a success alert is shown.
- Otherwise, an error alert prompts the user to re-enter the OTP.
- The input field is cleared after each validation.

1. Clone the repository:
git clone https://github.com/dev-kdarshan/counter-app
2. Navigate to the project directory:
cd otpChanger
3. Open `otpChanger.html` in any modern web browser.

## Code Logic (Simplified)

```js
let otp_generated = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
alert("YOUR OTP IS : " + otp_generated);

if (userInput == otp_generated) {
    alert("correct");
} else {
    alert("reenter");
}

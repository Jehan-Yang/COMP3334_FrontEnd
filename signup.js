const signupForm = document.getElementById("signup-form");
const snsInput = document.getElementById("sns");
const emailInput = document.getElementById('email');
const setPassw = document.getElementById('setpasswd');

function sendVerificationCode() {


  // Validate email
  if (validateEmail(emailInput.value)) {
    // Send verification code
    alert('Verification code sent to ' + emailInput.value);
  } else {
    // Show error message
    alert('Please input your email address!');
  }
}

function validateEmail(email) {
  if(email === '') {
    return false;
  }
  return true;
}

signupForm.addEventListener("submit", function(event) {
    event.preventDefault(); // 阻止表单提交
    const sns = snsInput.value.trim();
    const setpassword = setPassw.value.trim();
    if (sns === "0000") {
        window.location.href = "login1.html";

    } else {

        snsInput.value = "";
        snsInput.focus();
        alert("Incorrect SNS. Please try again.");
    }
});
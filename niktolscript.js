const sign_in_btn = document.querySelector("#sign-in-btn");
const sign_up_btn = document.querySelector("#sign-up-btn");
const container = document.querySelector(".container");

sign_up_btn.addEventListener("click", () => {
  container.classList.add("sign-up-mode");
});

sign_in_btn.addEventListener("click", () => {
  container.classList.remove("sign-up-mode");
});

/*Validation*/
function signinvalidation() {
  var uname = document.getElementById("suname").value;
  var pwd = document.getElementById("spwd").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  if (uname == "") {
    alert("Please enter user name.");
    return false;
  } else if (pwd == "") {
    alert("Enter the password");
    return false;
  } else if (pwd.length < 8) {
    alert("Password min length is 8.");
    return false;
  } else {
    alert("Logging you in :)");
    //Redirecting to other page or webste code or you can set your own html page.
    window.location = "#";
  }
}

function signupvalidation() {
  var supname = document.getElementById("supname").value;
  var suppwd = document.getElementById("suppwd").value;
  var supemail = document.getElementById("supemail").value;
  var supconpwd = document.getElementById("supconpwd").value;
  var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;

  if (supname == "") {
    alert("Please enter username.");
    return false;
  } else if (!filter.test(supemail)) {
    alert("Enter valid email-ID.");
    return false;
  } else if (suppwd == "") {
    alert("Enter the password");
    return false;
  } else if (suppwd.length < 8) {
    alert("Password min length is 8.");
    return false;
  } else if (supconpwd == "") {
    alert("Confirm your password");
    return false;
  } else if (suppwd != supconpwd) {
    alert("Passwords do not match.");
    return false;
  }
}

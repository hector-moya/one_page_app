var header = document.getElementById("button");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active1");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active1", "");
        }
        this.className += " active1";
    });
}
for (var i = 0; i < btns.length; i++) {

    btns[i].addEventListener("click", function (event) {
        var eventID = event.target.id;
        var homeID = document.getElementById(eventID);
        var z = homeID.getAttribute("class").split(' ');
        var classOne = z[1];


        var content = document.getElementsByClassName(classOne);
        var none = document.getElementsByTagName("section");
        var a;
        var e;
        for (e = 0; e < none.length; e++) {
            none[e].style.display = "none";
        }
        for (a = 0; a < content.length; a++) {
            content[a].style.display = "block";
        }
    });
}
var footer = document.getElementById("footerButton");
var btns2 = footer.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
    btns2[i].addEventListener("click", function () {
        var current = document.getElementsByClassName("active1");
        if (current.length > 0) {
            current[0].className = current[0].className.replace(" active1", "");
        }
        this.className += " active1";
    });
}
for (var i = 0; i < btns.length; i++) {

    btns2[i].addEventListener("click", function (event) {
        var eventID = event.target.id;
        var homeID = document.getElementById(eventID);
        var z = homeID.getAttribute("class").split(' ');
        var classOne = z[1];


        var content = document.getElementsByClassName(classOne);
        var none = document.getElementsByTagName("section");
        var a;
        var e;
        for (e = 0; e < none.length; e++) {
            none[e].style.display = "none";
        }
        for (a = 0; a < content.length; a++) {
            content[a].style.display = "block";
        }
    });
}
window.onscroll = function() {myFunction()};

var navbar = document.getElementById("navbar");
var sticky = navbar.offsetTop;
function myFunction() {
    if (window.pageYOffset >= sticky) {
      navbar.classList.add("sticky")
    } else {
      navbar.classList.remove("sticky");
    }
  }
/*-------------------------------- Form Validation Script --------------------------------*/


var myInput = document.getElementById("firsName");
var letter = document.getElementById("letter");
var myInput2 = document.getElementById("lastName");
var letter2 = document.getElementById("letter2");
var mobilePhone = document.getElementById("mobilePhone");
var length = document.getElementById("mobile");
var checkEmail = document.getElementById("email");
var mail2 = document.getElementById("mail2");
var password = document.getElementById("password1");
var checkPass = document.getElementById("checkPass");
var password2 = document.getElementById("password2");
var checkPass2 = document.getElementById("checkPass2");


// When the user clicks on the password field, show the message box


// When the user starts to type something inside the password field
myInput.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /.{3,}/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }
}
myInput2.onkeyup = function () {
    // Validate lowercase letters
    var lowerCaseLetters = /.{3,}/g;
    if (myInput2.value.match(lowerCaseLetters)) {
        letter2.classList.remove("invalid");
        letter2.classList.add("valid");
    } else {
        letter2.classList.remove("valid");
        letter2.classList.add("invalid");
    }
}
mobilePhone.onkeyup = function () {
    var phone = /.[0-9].{8,}/g;
    if (mobilePhone.value.match(phone)) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}
checkEmail.onkeyup = function () {
    var email = /.{4,}.[@]/g;
    if (checkEmail.value.match(email)) {
        mail2.classList.remove("invalid");
        mail2.classList.add("valid");
    } else {
        mail2.classList.remove("valid");
        mail2.classList.add("invalid");
    }
}


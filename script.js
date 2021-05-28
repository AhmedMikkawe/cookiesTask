var userName = document.getElementById("name");
var userAge = document.getElementById("age");
var userIsmale = document.querySelector("#male");
var userIsFemale = document.querySelector("#female");
var color = document.getElementById("color");
var date = new Date();

document.querySelector("button").addEventListener("click", function () {
  date.setMonth(date.getMonth() + 3);
  setCookie("usrname", userName.value, date);
  setCookie("usrage", userAge.value, date);
  if (userIsmale.checked == true) {
    setCookie("genderPic", "1.jpg", date);
    setCookie("usrgender", "male", date);
  } else {
    setCookie("genderPic", "2.jpg", date);
    setCookie("usrgender", "female", date);
  }
  setCookie("usrcolor", color.value, date);
  location.assign("profile.html");
});

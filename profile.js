var date = new Date();
date.setMonth(date.getMonth() + 3);
document.onload = setCounter();
var div = document.querySelector("div");
var img = document.createElement("img");
img.src = getCookie("genderPic");

div.appendChild(img);
var msg = (document.getElementById(
  "msg"
).innerHTML = `Welcome <span style='color:${getCookie("usrcolor")}'>${getCookie(
  "usrname"
)}</span> You visited this page <span style='color:${getCookie("usrcolor")}'>${
  hasCookie("visitCounter") ? parseInt(getCookie("visitCounter")) + 1 : 1
}</span> times`);

function setCounter() {
  if (hasCookie("visitCounter") == true) {
    setCookie("visitCounter", parseInt(getCookie("visitCounter")) + 1, date);
  } else {
    setCookie("visitCounter", 1, date);
  }
}

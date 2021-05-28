var cookies = document.cookie;
var expiDate = new Date();
var expiDate2 = expiDate.setFullYear(2000);
function getCookie(cookieName) {
  var name = allCookieList();
  return name[cookieName.trim()];
}

function setCookie(cookieName, cookieValue, expiryDate = expiDate2) {
  document.cookie = `${cookieName}=${cookieValue}; expires=${expiryDate}`;
}
function deleteCookie(cookieName) {
  document.cookie = cookieName + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}
function allCookieList() {
  var cookiesArray = cookies.split(";");
  var cookiesArrayAss = [];
  for (let i = 0; i < cookiesArray.length; i++) {
    cookiesArrayAss[cookiesArray[i].split("=")[0].trim()] = cookiesArray[
      i
    ].split("=")[1];
  }
  return cookiesArrayAss;
}
function hasCookie(cookieName) {
  var cookieArray = allCookieList();
  if (cookieArray[cookieName] == undefined) {
    return false;
  } else {
    return true;
  }
}

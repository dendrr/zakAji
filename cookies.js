function setCookie(name,value,days) {
  var expires = "";
  if (days) {
      var date = new Date();
      date.setTime(date.getTime() + (days*24*60*60*1000));
      expires = "; expires=" + date.toUTCString();
  }
  document.cookie = name + "=" + (value || "")  + expires + "; path=/";
}
function getCookie(name) {
  var nameEQ = name + "=";
  var ca = document.cookie.split(';');
  for(var i=0;i < ca.length;i++) {
      var c = ca[i];
      while (c.charAt(0)==' ') c = c.substring(1,c.length);
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
  }
  return null;
}
function eraseCookie(name) {   
  document.cookie = name +'=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;';
}
function showIfAdultPopup() {
  document.addEventListener('DOMContentLoaded', function(){
    console.log(document.getElementById("if_adult-popup-background"));
    document.getElementById("if_adult-popup-background").style.display = 'flex';
  })
}

if (getCookie("is_adult") == null || getCookie("is_adult") == "0") {
  setCookie("is_adult", "0", 30);
  showIfAdultPopup();
}


// setCookie("is_adult", "0", 30);
// document.cookie = "is_adult=1";
// console.log(getCookie("is_adult"));
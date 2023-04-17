function setCookies(c_name, value, expiredays) {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays)
    document.cookie = c_name + "=" + escape(value) + ((expiredays == null) ? "" : ";expires=" + exdate
    .toGMTString()) + "path=/" + "httponly";
    var x = document.cookie;
    console.log(x + "----------")
    console.log(exdate + "----------")
}

function getCookie(c_name){
	if(document.cookie.length > 0){
	  let c_start = document.cookie.indexOf(c_name+ "=");
	  if(c_start!= -1){
	    c_start = c_start + c_name.length+1
	    c_end = document.cookie.indexOf(";",c_start)
	    if(c_end == -1){
	      c_end = document.cookie.length
	      console.log(document.cookie.substring(c_start,c_end))
	      return unescape(document.cookie.substring("cookie:"+c_start,c_end))
	    }
	  }
	}
	console.log("没有设置cookie")
	return ""
}

// function checkCookie(){
//     username = getCookie("username");
//     if(username != "" && username != null ) {
//       alert("欢迎回来，" + username + "!")
//     } else {
//       username = prompt("请填写你的名字：","")
//       if(username != null && username !=""){
//         setCookies("username", username, 365)
//       }
//     }
//  }
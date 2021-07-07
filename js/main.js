/*
    Cookies
    https://www.w3schools.com/js/js_cookies.asp

*/

/*
The parameters of the function above are the name of the cookie (cname), the value of the cookie (cvalue), and the number of days until the cookie should expire (exdays).
The function sets a cookie by adding together the cookiename, the cookie value, and the expires string.
*/
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

/*
    Create a variable (name) with the text to search for (cname + "=").
    If the cookie is found (c.indexOf(name) == 0), return the value of the cookie (c.substring(name.length, c.length).
    If the cookie is not found, return "".
*/
function getCookie(cname) {
    let name = cname + "=";
    let decodedCookie = decodeURIComponent(document.cookie);
    let ca = decodedCookie.split(';');
    for(let i = 0; i <ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }


//setCookie("User","12345",3);
var userToken = getCookie("User");
//console.log({userToken})

/*
    user
    id : {
        name:"",
        lastname: "",
        password: "",
        email: "",
        role: "",
        creationDate: "",
    }

    post
    id : {
        userId: user.id,
        title: "",
        imageUrl: ""
        content: "",
        creationDate: "",
    }

    comments
    id: {
        postId: post.Id,
        userId: user.Id,
        comment: "",
        creationDate: "",
    }
*/

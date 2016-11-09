$('document').ready(function() {
    //noinspection JSUndeclaredVariable
    vetRange = new Array();
    vetClick = new Array();
});

function geraRange() {
    vetRange.push(Math.floor((Math.random() * 4) + 1));
}

function gravaRange(vet) {
    var vet;
    vetClick.push(vet);
}

function setCookie(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function getCookie(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function checkCookie() {
    var user = getCookie("username");
    if (user != "") {
        alert("Olá " + user);
    } else {
        user = prompt("Por Favor! Informe seu nome:", "");
        if (user != "" && user != null) {
            setCookie("username", user, 365);
        }
    }
}
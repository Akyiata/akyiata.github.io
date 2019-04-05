var i=0;

function checkConsole(){
    if (i === 20) {
	document.getElementById('smefpw2').innerHTML = "<font face=\"verdana\"><font color=\"red\">[console_<]</font> console reset<br></font>";
	i=1;
	}
}

// disable rightclick
document.addEventListener("contextmenu", function(disablemouse) {
 disablemouse.preventDefault();
document.getElementById('smefpw2').innerHTML += "<font face=\"verdana\"><font color=\"red\">[console_<]</font> context menu disabled</font><br>";
i += 1;
checkConsole();
}, false);
// disable rightclick

// urls functions
function forum() {
	document.getElementById('smefpw2').innerHTML += "<font face=\"verdana\"><font color=\"red\">[console_<]</font> Skidsense -> Loaded</font><br>";
	i += 1;
	checkConsole();
}

function discord() {
	document.getElementById('smefpw2').innerHTML += "<font face=\"verdana\"><font color=\"red\">[console_<]</font> Discord -> Loaded</font><br>";
	i += 1;
checkConsole();
}
function uuuu() {
	document.getElementById('smefpw2').innerHTML += "<font face=\"verdana\"><font color=\"red\">[console_<]</font> uuuu</font><br>";
	i += 1;
checkConsole();
}
// urls functions

// site checker
function checkURL() {
var currentLocation = window.location.href;
	if (currentLocation == "https://satanax.tk") {
		document.getElementById('smefpw').innerHTML += "<br><font face=\"verdana\"><font color=\"red\">[console_<]</font> official site<br></font>";
}	
else {
		document.getElementById('smefpw').innerHTML += "<br><font face=\"verdana\"><font color=\"red\">[console_<]</font> unverified site current site " + window.location.href + " differs from official site smef.pw<br></font>";
	}
}
// site checker
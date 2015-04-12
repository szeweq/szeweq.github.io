var WI = new Worker("worker.js");
WI.onmessage = function(m) {
	console.log(m);
};
var CanUse = {
	promise: ("Promise" in window)
};
function command() {
	var A = Array.from(arguments), cn = A.shift(), dn = Date.now();
	A.unshift(dn);
	A.unshift(cn);
	return new Promise(function(g,r){
		WI.postMessage(A);
		var complete, err;
		complete = function(m){
			if(m.data[0] == cn && m.data[1] == dn) {
				WI.removeEventListener("message",complete);
				WI.removeEventListener("error",err);
				g(m.data.slice(2));
			}
		};
		err = function(e){
			WI.removeEventListener("message",complete);
			WI.removeEventListener("error",err);
			r(e);
		};
		WI.addEventListener("message",complete);
	});
}
var
	getHTML = command.bind(null, "getHTML"),
	getKAML = command.bind(null, "getKAML"),
	getGitHub = command.bind(null, "getGitHub");

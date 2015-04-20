var $2 = function(d){return HTMLDocument.prototype.querySelector.bind(d);}, $1 = $2(document);
var WI = new Worker("worker.js");
WI.onmessage = function(m) {
	console.log(m);
};
var CanUse = {
	promise: ("Promise" in window),
	hashchange: ("onhashchange" in window)
};
function ready(){
	return new Promise(function(g,r){
		if(document.readyState == "interactive" || document.readyState == "complete") g();
		else{
			var complete = function(){
				document.removeEventListener("DOMContentLoaded",complete);
				g();
			};
			document.addEventListener("DOMContentLoaded",complete);
		}
	});
}
function command(){
	var A = Array.from(arguments), cn = A.shift(), dn = Date.now();
	A.unshift(dn);
	A.unshift(cn);
	return new Promise(function(g,r){
		WI.postMessage(A);
		var complete, err;
		complete = function(m){
			if(m.data[0] == cn && m.data[1] == dn){
				WI.removeEventListener("message",complete);
				WI.removeEventListener("error",err);
				g.apply(null,m.data.slice(2));
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
function hash(h){
	location.hash = "";
	switch(h){
		case "repos": getGitHub("users/Szewek/repos").then(function(j){
			$1("main").innerHTML = "<article id=\"my-repos\"><h2 data-l10n-id=\"repos\"></h2><table></table></article>";
			$1("main #my-repos table").innerHTML += "<thead><tr><th data-l10n-id=\"name\"></th><th data-l10n-id=\"desc\"></th><th data-l10n-id=\"fork\"></th><th data-l10n-id=\"private\"></th></tr></thead><tbody></tbody>";
			if(j instanceof Array) j.forEach(function(e){
				document.querySelector("main #my-repos table tbody").innerHTML += "<tr><td>"+(["<a href=\""+e.html_url+"\">"+e.name+"</a>",e.description,"<span data-l10n-id=\""+(e.fork?"yes":"no")+"Caps\"></span>","<span data-l10n-id=\""+(e.private?"yes":"no")+"Caps\"></span>"]).join("</td><td>")+"</td></tr>";
			});
			document.l10n.localizeNode(document.querySelector("main #my-repos"));
		}); break;
		default: console.log("UNKNOWN HASH:",h); break;
	}
}
window.onhashchange = function(e){
	if(location.hash == "" || location.hash == "#") return false;
	hash(location.hash.substring(1));
};
ready().then(getGitHub.bind(null,"users/Szewek")).then(function(j){
	$1("header nav #repos").dataset.title = j.public_repos;
	$1("header nav #follow").dataset.title = j.followers;
});
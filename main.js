const ANIM = {
	start:"animationstart webkitAnimationStart mozAnimationStart MSAnimationStart oanimationstart",
	iter:"animationiteration webkitAnimationIteration mozAnimationIteration MSAnimationIteration oanimationiteration",
	end:"animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend"
};
var $2 = function(d){return HTMLDocument.prototype.querySelector.bind(d);}, $1 = $2(document);
var WI = new Worker("worker.js");
WI.onmessage = function(m) {
	console.log(m);
};
var Loading = {}, CanUse = {
	promise: ("Promise" in window),
	hashchange: ("onhashchange" in window)
};
Function.prototype.args = (function(){var A = Array.from(arguments);A.unshift(null);return this.bind.apply(this,A);});
function dateFormat(dt){return (new Date(dt)).toLocaleString(navigator.language,{month:"short",day:"numeric",year:"numeric",hour:"2-digit",minute:"2-digit",second:"2-digit"});}
function JS(js){
	var s = document.createElement("script");
	s.async = true;
	s.src = js;
	return new Promise(function(t,c){s.onload=t;document.head.appendChild(s);});
}
function CSS(css){
	var s = document.createElement("link");
	s.rel = "stylesheet";
	s.type = "text/css";
	s.href = css;
	return new Promise(function(t,c){s.onload=t;document.head.appendChild(s);});
}
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
	addCommand = command.bind.bind(command,null),
	getHTML = addCommand("getHTML"),
	getKAML = addCommand("getKAML"),
	getGitHub = addCommand("getGitHub");
function hash(h){
	location.hash = "";
	switch(h){
		case "repos":
			Loading.on();
			getGitHub("users/Szewek/repos").then(function(j){
				$1("main").innerHTML = "<article id=\"my-repos\"><h2 data-l10n-id=\"repos\"></h2><table></table></article>";
				$1("main #my-repos table").innerHTML += "<thead><tr><th data-l10n-id=\"repo\"></th><th data-l10n-id=\"fork\"></th><th data-l10n-id=\"private\"></th><th data-l10n-id=\"created\"></th><th data-l10n-id=\"changed\"></th></tr></thead><tbody></tbody>";
				if(j instanceof Array) j.forEach(function(e){
					$1("main #my-repos table tbody").innerHTML += "<tr><td>"+([
						"<h3><a href=\""+e.html_url+"\">"+e.name+"</a></h3>"+e.description,
						"<span data-l10n-id=\""+(e.fork?"yes":"no")+"Caps\"></span>",
						"<span data-l10n-id=\""+(e.private?"yes":"no")+"Caps\"></span>",
						dateFormat(e.created_at),
						dateFormat(e.updated_at)
						]).join("</td><td>")+"</td></tr>";
				});
				document.l10n.localizeNode(document.querySelector("main #my-repos"));
				Loading.off();
			}); break;
		default: console.log("UNKNOWN HASH:",h); break;
	}
}
window.onhashchange = function(e){
	if(location.hash == "" || location.hash == "#") return false;
	hash(location.hash.substring(1));
};
Promise.all([JS("l20n.min.js"),JS("https://raw.githubusercontent.com/bendc/sprint/master/sprint.min.js")])
.then(function(){
	Loading.$=$("#loadcircle, #loadbar");
	Loading.$b=$("#loadbar");
	Loading.on=function(){this.$.addClass("showing").removeClass("hidden");};
	Loading.progress=function(q){this.$b.css("transform","translateX("+(q*100)+"%)");};
	Loading.off=function(){this.$b.css("transform","translateX(100%)");this.$.addClass("hiding");};
})
.then(ready)
.then(function(){
	$("#loadbg, #loadcircle, #loadbar").on(ANIM.end,function(){U=$(this);if(U.hasClass("hiding"))U.addClass("hidden");U.removeClass("hiding showing");});
	return getGitHub("users/Szewek");
})
.then(function(j){
	$1("header nav #repos").dataset.title = j.public_repos;
	$1("header nav #follow").dataset.title = j.followers;
})
.then(function(){
	setTimeout(function(){$("#loadbg, #loadcircle, #loadbar").addClass("hiding");},200);
});
const ANIM = {
	start:"animationstart webkitAnimationStart mozAnimationStart MSAnimationStart oanimationstart",
	iter:"animationiteration webkitAnimationIteration mozAnimationIteration MSAnimationIteration oanimationiteration",
	end:"animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend"
}, MODELS = {
	"repos-table-row": function(c, o) {
		var a = c.querySelector("h3 a");
		a.href = o.html_url;
		a.textContent = o.name;
		c.querySelector(".desc").textContent = o.description;
		c.querySelector(".gitLang").textContent = o.language;
		c.querySelector(".isFork").dataset.l10nId = (o.fork ? "yes" : "no") + "Caps";
		c.querySelector(".isPrivate").dataset.l10nId = (o.private ? "yes" : "no") + "Caps";
		c.querySelector(".timeCreated").textContent = dateFormat(o.created_at);
		c.querySelector(".timeUpdated").textContent = dateFormat(o.updated_at);
	}
};
var $2 = function(d){return HTMLDocument.prototype.querySelector.bind(d);}, $1 = $2(document);
var WI = new Worker("worker.js");
var Loading = {};
Function.prototype.args = (function(){var A = Array.from(arguments);A.unshift(null);return this.bind.apply(this,A);});
function useModel(n, o, e) {
	var t = document.querySelector('template[data-model="' + n + '"]');
	if (!t || !t.content) return;
	if(n in MODELS) MODELS[n](t.content, o);
	var cl = document.importNode(t.content, true);
	e.appendChild(cl);
}
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
				var M = $1("main");
				M.innerHTML = "";
				useModel("repos-page", {}, M);
				if(j instanceof Array) j.forEach(function(e){
					useModel("repos-table-row", e, $1("main table tbody"));
				});
				document.l10n.localizeNode(document.querySelector("main"));
				setTimeout(Loading.off, 100);
				Loading.off();
			}); break;
		default: console.log("UNKNOWN HASH:",h); break;
	}
}
window.onhashchange = function(e){
	if(location.hash == "" || location.hash == "#") return false;
	hash(location.hash.substring(1));
};
Promise.all([JS("l20n.min.js"),JS("sprint.min.js")])
.then(function(){
	Loading.$=$("#loadcircle");
	Loading.on=function(){Loading.$.addClass("showing").removeClass("hidden");};
	Loading.off=function(){Loading.$.addClass("hiding");};
})
.then(ready)
.then(function(){
	$("#loadbg, #loadcircle").on(ANIM.end,function(){U=$(this);if(U.hasClass("hiding"))U.addClass("hidden");U.removeClass("hiding showing");});
	return getGitHub("users/Szewek");
})
.then(function(j){
	$1("header nav #repos").dataset.title = j.public_repos;
	$1("header nav #follow").dataset.title = j.followers;
})
.then(function(){
	setTimeout(function(){$("#loadbg, #loadcircle, #loadbar").addClass("hiding");},200);
});
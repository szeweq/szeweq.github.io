const MENU = [
	{id: "a-follow", hoverable: true, hover: "...", link: "https://github.com/Szewek", loc: "follow"},
	{id: "a-repos", hoverable: true, hover: "...", link: "#repos", loc: "repos"}
], ANIM = {
	start:"animationstart webkitAnimationStart mozAnimationStart MSAnimationStart oanimationstart",
	iter:"animationiteration webkitAnimationIteration mozAnimationIteration MSAnimationIteration oanimationiteration",
	end:"animationend webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend"
}, MODELS = {
	"repos-table-row": function(c, o) {
		var a = c.querySelector(".repolink");
		a.href = o.html_url;
		a.textContent = o.name;
		c.querySelector(".readmelink").href = "#readme/"+ o.name;
		c.querySelector(".issuelink").href = "https://github.com/Szewek/"+ o.name +"/issues";
		c.querySelector(".desc").textContent = o.description;
		c.querySelector(".gitLang").textContent = o.language;
		c.querySelector(".isFork").dataset.l10nId = (o.fork ? "yes" : "no") + "Caps";
		c.querySelector(".isPrivate").dataset.l10nId = (o.private ? "yes" : "no") + "Caps";
		c.querySelector(".timeCreated").textContent = dateFormat(o.created_at);
		c.querySelector(".timeUpdated").textContent = dateFormat(o.updated_at);
	},
	"nav-link": function(c, o) {
		var a = c.querySelector("a");
		a.id = o.id;
		a.target = o.link.charAt(0) == "#" ? "" : "_blank";
		a.href = o.link;
		if (o.hoverable) {
			a.classList.add("hoverable");
			a.dataset.title = o.hover;
		}
		if (o.loc) a.dataset.l10nId = o.loc;
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
	getGitHub = addCommand("getGitHub"),
	getReadme = addCommand("getReadme");
function hash(h){
	location.hash = "";
	switch(h[0]){
		case "repos":
			Loading.on();
			getGitHub("users/Szewek/repos").then(function(j){
				var M = $1("main");
				M.innerHTML = "";
				useModel("repos-page", {}, M);
				if(j instanceof Array) j.forEach(function(e){
					useModel("repos-table-row", e, $1("main table tbody"));
				});
				document.l10n.localizeNode($1("main"));
				setTimeout(Loading.off, 100);
			}); break;
		case "readme":
			Loading.on();
			getReadme(h[1]).then(function(md){
				var M = $1("main");
				M.innerHTML = "";
				var MD = document.createElement("section");
				MD.innerHTML = md;
				M.appendChild(MD);
				setTimeout(Loading.off, 100);
			}); break;
		default: console.log("UNKNOWN HASH:",h); break;
	}
}
window.onhashchange = function(e){
	if(location.hash == "" || location.hash == "#") return false;
	hash(location.hash.substring(1).split("/"));
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
	var N = $1("header nav");
	MENU.forEach(function(e){useModel("nav-link", e, N);});
	document.l10n.localizeNode(N);
	$1("header nav #a-repos").dataset.title = j.public_repos;
	$1("header nav #a-follow").dataset.title = j.followers;
})
.then(function(){
	setTimeout(function(){$("#loadbg, #loadcircle, #loadbar").addClass("hiding");},200);
	document.body.classList.remove("preload");
});
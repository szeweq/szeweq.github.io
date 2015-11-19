importScripts("https://raw.githubusercontent.com/chjj/marked/master/marked.min.js");
var CanUse = {
	fetch: (typeof fetch != "undefined"),
	promise: (typeof Promise != "undefined")
};
var Responder = function Responder(name, d) {
	this.fn = name;
	this.stamp = d;
};
Responder.prototype.start = function(data) {
	this.data = data;
	if (this.fn in Handlers) Handlers[this.fn].call(null, this);
};
Responder.prototype.respond = function(ret) {postMessage([this.fn, this.stamp, ret, null]);};
Responder.prototype.error = function(err) {postMessage([this.fn, this.stamp, null, err]);};
var Handlers = {
	canUse:function(R){
		R.respond(CanUse);
	},
	getHTML:CanUse.fetch?(function(R){
		fetch("pages/"+ R.data[0]+".html").then(function(r){
			if(!r.ok) return R.error("Not OK");
			else r.text().then(R.respond.bind(R));
		});
	}):(function(R){
		var X = new XMLHttpRequest();
		X.open("GET","pages/"+R.data[0]+".html",true);
		X.onreadystatechange = function(){
			if(X.readyState == 4) {
				if(X.status == 200) R.respond(X.responseText);
				else R.error("Not OK");
			}
		};
		X.send();
	}),
	getGitHub:CanUse.fetch?(function(R){
		fetch("https://api.github.com/"+R.data[0]).then(function(r){
			if(!r.ok) return R.error("Not OK");
			else r.json().then(R.respond.bind(R));
		});
	}):(function(R){
		var X = new XMLHttpRequest();
		X.open("GET","https://api.github.com/"+R.data[0],true);
		X.onreadystatechange = function(){
			if(X.readyState == 4) {
				if(X.status == 200) R.respond(JSON.parse(X.responseText));
				else R.error("Not OK");
			}
		};
		X.send();
	}),
	getReadme:CanUse.fetch?(function(R){
		fetch("https://api.github.com/repos/Szewek/"+R.data[0]+"/readme").then(function(r){
			if(!r.ok) return R.error("Not OK");
			else r.json().then(function(j){
				R.respond(marked(atob(j.content)));
			});
		});
	}):(function(R){
		var X = new XMLHttpRequest();
		X.open("GET","https://api.github.com/repos/Szewek/"+R.data[0]+"/readme");
		X.onreadystatechange = function(){
			if(X.readyState == 4) {
				if(X.status == 200) R.respond(marked(atob(JSON.parse(X.responseText).content)));
				else R.error("Not OK");
			}
		}
	})
}
onmessage = function(m){new Responder(m.data.shift(), m.data.shift()).start(m.data);};

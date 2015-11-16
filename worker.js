var CanUse = {
	fetch: (typeof fetch != "undefined")
};

var Handlers = {
	canUse:function(d){
		postMessage(["canUse",d,CanUse]);
	},
	getHTML:CanUse.fetch?(function(d,n){
		fetch("pages/"+n+".html").then(function(r){
			if(!r.ok) return postMessage(["getHTML",d,null,"Not OK"]);
			else r.text().then(function(t){
				postMessage(["getHTML",d,t,null]);
			});
		});
	}):(function(d,n){
		var X = new XMLHttpRequest();
		X.open("GET","pages/"+n+".html",true);
		X.onreadystatechange = function(){
			if(X.readyState == 4) {
				if(X.status == 200) postMessage(["getHTML",d,X.responseText,null]);
				else postMessage(["getHTML",d,null,"Not OK"]);
			}
		};
		X.send();
	}),
	getGitHub:CanUse.fetch?(function(d,n){
		fetch("https://api.github.com/"+n).then(function(r){
			if(!r.ok) return postMessage(["getGitHub",d,null,"Not OK"]);
			else r.json().then(function(j){
				postMessage(["getGitHub",d,j,null]);
			});
		});
	}):(function(d,n){
		var X = new XMLHttpRequest();
		X.open("GET","https://api.github.com/"+n,true);
		X.onreadystatechange = function(){
			if(X.readyState == 4) {
				if(X.status == 200) postMessage(["getGitHub",d,JSON.parse(X.responseText),null]);
				else postMessage(["getGitHub",d,null,"Not OK"]);
			}
		};
		X.send();
	})
}
onmessage = function(m){
	if (m.data[0] in Handlers) {
		Handlers[m.data.shift()].apply(null,m.data);
	}
};

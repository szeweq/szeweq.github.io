var CanUse = {
	fetch: (typeof fetch != "undefined")
};

var Handlers = {
	getKAML:CanUse.fetch?(function(n){
		fetch("pages/"+n+".kaml").then(function(r){
			if(!r.ok) return postMessage(["getKAML",null,"Not OK"]);
			else r.text().then(function(t){
				postMessage(["getKAML",parseKAML(t),null]);
			});
		});
	}):(function(n){
		var X = new XMLHttpRequest();
		X.open("GET","pages/"+n+".kaml",true);
		X.onreadystatechange = function(){
			if(X.readyState == 4) {
				if(X.status == 200) postMessage(["getKAML",parseKAML(X.responseText),null]);
				else postMessage(["getKAML",null,"Not OK"]);
			}
		};
		X.send();
	}),
	getHTML:CanUse.fetch?(function(n){
		fetch("pages/"+n+".html").then(function(r){
			if(!r.ok) return postMessage(["getHTML",null,"Not OK"]);
			else r.text().then(function(t){
				postMessage(["getHTML",t,null]);
			});
		});
	}):(function(n){
		var X = new XMLHttpRequest();
		X.open("GET","pages/"+n+".html",true);
		X.onreadystatechange = function(){
			if(X.readyState == 4) {
				if(X.status == 200) postMessage(["getHTML",X.responseText,null]);
				else postMessage(["getHTML",null,"Not OK"]);
			}
		};
		X.send();
	})
}
onmessage = function(m){
	if (m.data[0] in Handlers) {
		postMessage(["pending",m.data[0]]);
		Handlers[m.data.shift()].apply(null,m.data);
	}
};

function parseKAML(S,O){
	var A=[];
	return S
	.replace(/<\?\s*([^>\s]*)\s*>/ig,function(f,m){return O[m]})
	.replace(/<(\/|([^ >]*)([^>]*))>/ig,function(f,m,n,e){
		if(n){
			var I=[],C=[],T=[],
				r=n.replace(/([.#])([^ .#]*)/g,function(xg,z,xs){(z=="."?C:z=="#"?I:[]).push(xs.replace("#",""));return "";}).replace(/^\/\//i,""),
				v=n.match(/^\/\//i),
				z=e.split(/ ([^="]=?"[^"]"|\/)/).filter(function(e){return e.length;}).map(function(e){
					e=e.trim();
					if(!e.indexOf("\"") && r in defaults) return defaults[r]+"="+e;
					if(!e.indexOf("~")) return "style="+e.substring(1);
					if(!e.indexOf("*")) return "data-"+e.substring(1);
					return e;
				}).join(" ");
				h=r=="+";
			if(!v&&!h)A.push(r);
			return "<"+(h?"/"+A[A.length-1]+"><"+A[A.length-1]:r)+(I.length?" id=\""+I.join(" ")+"\"":"")+(C.length?" class=\""+C.join(" ")+"\"":"")+(z?" "+z:"")+(v?"/":"")+">";
		} else if(m=="/")return "</"+A.pop()+">";
	});
}
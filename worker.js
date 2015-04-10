if(typeof fetch != "undefined") postMessage(["using","fetch"]);
else postMessage(["using","xhr"]);

var Handlers = {
	fetchKAML:function(n){
		fetch("_pages/"+n+".kaml").then(function(r){
			postMessage(r.ok?["fetchKAML",parseKAML(r.text()),null]:["fetchKAML",null,"Not OK"]);
		});
	},
	xhrKAML:function(n){

	}
}
Handlers.fetchKAML();
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
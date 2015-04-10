if(typeof fetch != "undefined") postMessage(["using","fetch"]);
else postMessage(["using","xhr"]);

var Handlers = {
	fetchKAML:function(n){
		fetch("style.css").then(function(r){
			postMessage(["fetchKAML",r]);
		});
	},
	xhrKAML:function(n){

	}
}
Handlers.fetchKAML();
var WI = new Worker("worker.js");
WI.onmessage = function(m) {
	console.log(m);
};
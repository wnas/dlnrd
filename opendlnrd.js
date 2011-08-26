// open the dlnrd links in a new window
var odlnrd = function(){
	// get the first article
	var a = document.getElementsByTagName('article')[0],
		// find the article in there
		b = a.getElementsByTagName('article'),
		// calculate the length of those outside the loop
		c = b.length;
	// iterate over them
	for ( var i = -1; ++i < c;){
		// open a new window for each link
		var d = b[i].getElementsByTagName('a'),
			e = d.length;
			for ( var j = -1; ++j < e; ){
				window.open(d[j].getAttribute('href'));
			}
	}
}();

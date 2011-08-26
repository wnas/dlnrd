// open the dlnrd links in a new window
var odlnrd = function(){
	// get the first article
	var article = document.getElementsByTagName('article')[0],
		// find the h2's
		h2 = article.getElementsByTagName('h2'),
		// calculate the length of those outside the loop
		len = h2.length;
	// iterate over them
	for ( var i = -1; ++i < len;){
		// open a new window for each link
		window.open(h2[i].getElementsByTagName('a')[0].getAttribute('href'));
	}
}();

// do the same for ppk's linkbait
var olb = function(){
	var linkbait = document.getElementsByClassName('linkbait')[0],
		links = linkbait.getElementsByClassName('external'),
		len = links.length;
	for ( var i = -1; ++i < len;){
		window.open(links[i].getAttribute('href'));
	}
}();

// and for Robert's read list.
var orn = function(){
	var roberts = document.getElementsByClassName('roberts-read-list')[0],
		links = roberts.getElementsByTagName('a')[0],
		len = links.length;
	for ( var i = -1; ++i < len;){
		window.open(links[i].getAttribute('href'));
	}
}();
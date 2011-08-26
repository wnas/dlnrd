// do the same for ppk's linkbait
var olb = function(){
	var linkbait = document.getElementsByClassName('linkbait')[0],
		links = linkbait.getElementsByClassName('external'),
		len = links.length;
	for ( var i = -1; ++i < len;){
		window.open(links[i].getAttribute('href'));
	}
}();

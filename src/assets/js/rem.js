;(function(doc, win) {
	var docEl = win.document.documentElement;
	var resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize';

	function refreshRem() {
		var clientWidth = win.innerWidth || doc.documentElement.clientWidth || doc.body.clientWidth;
		if(!clientWidth) return;
		var fz = 6.25 * clientWidth / 375 * 16;
		docEl.style.fontSize = fz + "px";
	}

	if(!doc.addEventListener) return;
	win.addEventListener(resizeEvt, refreshRem, false);
	doc.addEventListener('DOMContentLoaded', refreshRem, false);
	refreshRem();

})(document, window);


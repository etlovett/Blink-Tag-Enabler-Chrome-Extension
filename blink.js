(function () {
    var blinkTags = document.getElementsByTagName("blink");
    var numBlinkTags = blinkTags.length;
    var setBlinkTagVisibilities = function (visibility) {
	for (var i = 0; i < numBlinkTags; i++) {
	    blinkTags[i].style.visibility = visibility;
	}
    }
    var revertVisibilities = function () {
	setBlinkTagVisibilities("visible");
    };
    window.setInterval(function () {
        setBlinkTagVisibilities("hidden");
	window.setTimeout(revertVisibilities, 200);
    }, 1000);
})();

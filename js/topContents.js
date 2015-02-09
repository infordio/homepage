
var topContents = new function() {
	this.init = function() {
		var innerWindthSize = window.innerWidth;
		var innerHeightSize = window.innerHeight;
		var captionWindthSize = innerWindthSize*2/3;
		$('#topContents_accordion').raccordion({
            speed: 1000,
            sliderWidth: innerWindthSize,
            sliderHeight: innerHeightSize*2/3,
            autoCollapse: true
        });
	};
	
};

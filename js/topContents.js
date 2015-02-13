
var topContents = new function() {
	this.init = function() {
		var innerWindthSize = window.innerWidth;
		var innerHeightSize = window.innerHeight;
//		var innerSize = img_true_size("#topSlide01");
//		var innerPictureWidthSize = innerSize.width;
//		var innerPictureHeightSize = innerSize.height;
//		var captionWindthSize = innerPictureWidthSize*2/3;
		$('#topContents_accordion').raccordion({
            speed: 1000,
            sliderWidth: 1200,
            sliderHeight: 600,
            autoCollapse: true
        });
	};

};

//get Image true size
var img_true_size = function(image){
    var w = image.width ,
        h = image.height ;

    if ( typeof image.naturalWidth !== 'undefined' ) {  // for Firefox, Safari, Chrome
        w = image.naturalWidth;
        h = image.naturalHeight;

    } else if ( typeof image.runtimeStyle !== 'undefined' ) {    // for IE
        var run = image.runtimeStyle;
        var mem = { w: run.width, h: run.height };  // keep runtimeStyle
        run.width  = "auto";
        run.height = "auto";
        w = image.width;
        h = image.height;
        run.width  = mem.w;
        run.height = mem.h;

    } else {         // for Opera
        var mem = { w: image.width, h: image.height };  // keep original style
        image.removeAttribute("width");
        image.removeAttribute("height");
        w = image.width;
        h = image.height;
        image.width  = mem.w;
        image.height = mem.h;
    }

    return {width:w, height:h};
}
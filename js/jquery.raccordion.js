﻿(function ($) {
    $.fn.raccordion = function (options) {
        var settings = $.extend({
            speed: 700,
            sliderWidth: 1200,
            sliderHeight: 600,
            autoCollapse: true,
            activeSlide: 0
        }, options);

        return this.each(function () {
            var accordionWrapper = $(this);
            var width = 800;
            accordionWrapper.addClass('topContents_accordion');
            var totalSlides = accordionWrapper.find('.topContents_slide').size();
            var w = width;
            initiliaze();
            if (settings.activeSlide < totalSlides - 1) {
                setTimeout(function () {
                    accordionWrapper.find('.topContents_slide:eq(' + settings.activeSlide + ')').click()
                }, settings.speed);
            }

            function initiliaze() {
                if (settings.sliderWidth > $(window).width()) {
                    width = w * (($(window).width() / settings.sliderWidth));
                    accordionWrapper.css("width", settings.sliderWidth * ($(window).width() / settings.sliderWidth));
                    accordionWrapper.find('.topContents_slide').each(function (index) {
                        $(this).animate({ left: (index * (accordionWrapper.width()) / totalSlides) }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                    });
                } else {
                    width = w;
                    accordionWrapper.css("width", settings.sliderWidth);
                    accordionWrapper.find('.topContents_slide').each(function (index) {
                        $(this).animate({ left: (index * (accordionWrapper.width()) / totalSlides) }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                    });
                }
                if (settings.sliderHeight > $(window).height()) {

                    accordionWrapper.animate({ height: settings.sliderHeight * ($(window).height() / settings.sliderHeight) }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });

                    accordionWrapper.find('.topContents_slide').animate({ height: settings.sliderHeight * ($(window).height() / settings.sliderHeight) }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                }
                else {
                    accordionWrapper.animate({ height: settings.sliderHeight }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                    accordionWrapper.find('.topContents_slide').animate({ height: settings.sliderHeight }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                }
                accordionWrapper.find('.topContents_caption').css({ opacity: 0 });
            }

            $(window).resize(function () {
                accordionWrapper.find('.topContents_slide').each(function (index) {
                    $(this).stop().animate({ left: (index * (accordionWrapper.width()) / totalSlides) }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                });
                animateCaption();
                initiliaze();
            });


            function animateCaption() {
                accordionWrapper.find('.topContents_caption').stop().animate({ opacity: 0, bottom: 0 }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                accordionWrapper.find('.active').find('.topContents_caption').stop().animate({ opacity: 1 }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
            }


            accordionWrapper.find('.topContents_slide').mouseenter(function () {
                var ratio = (((accordionWrapper.width()) - width)) / (totalSlides - 1);
                if (($(this).width() == $('.topContents_slide').width()) || ($(this).width() == ratio)) {
                    accordionWrapper.find('.topContents_slide').removeClass('active');
                    $(this).addClass('active');
                    var currentIndex = accordionWrapper.find('.topContents_slide').index(this);
                    accordionWrapper.find('.topContents_slide').each(function (index) {
                        if (index == 0) {
                            $(this).animate({ left: 0 }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                        }
                        else if (index == currentIndex) {
                            $(this).animate({ left: (index) * ratio }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                        }
                        else if (index < currentIndex) {
                            $(this).animate({ left: (index) * ratio }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                        }
                        else if (index > currentIndex) {
                            $(this).animate({ left: width + (index - 1) * ratio }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                        }

                    });
                    animateCaption();
                }
            });


            if (settings.autoCollapse) {
                accordionWrapper.mouseleave(function () {
                    accordionWrapper.find('.topContents_slide').each(function (index) {
                        $(this).stop().animate({ left: (index * (accordionWrapper.width()) / totalSlides) }, { queue: false, speed: settings.speed, easing: 'easeOutQuad' });
                    });
                    accordionWrapper.find('.topContents_caption').css({ opacity: 0, bottom: 0 });
                });
            }

        });
    }
})(jQuery);

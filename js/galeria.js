var initPhotoSwipeFromDOM = function (gallerySelector) {
    var parseThumbnailElements = function (thumbnails) {
        var items = [];
        for (var i = 0; i < thumbnails.length; i++) {
            var figureEl = thumbnails[i];
            var linkEl = figureEl.children[0]; // <a> element
            var size = linkEl.getAttribute('data-size').split('x');
            var item = {
                src: linkEl.getAttribute('href'),
                w: parseInt(size[0], 10),
                h: parseInt(size[1], 10),
                title: figureEl.children[1].innerHTML // <figcaption> element
            };
            items.push(item);
        }
        return items;
    };

    var openPhotoSwipe = function (index) {
        var pswpElement = document.querySelectorAll('.pswp')[0];
        var items = parseThumbnailElements(document.querySelectorAll(gallerySelector + ' figure'));

        var options = {
            index: index,
            getThumbBoundsFn: function (index) {
                var thumbnail = document.querySelector(gallerySelector + ' figure:nth-child(' + (index + 1) + ') img');
                var pageYScroll = window.pageYOffset || document.documentElement.scrollTop;
                var rect = thumbnail.getBoundingClientRect();
                return { x: rect.left, y: rect.top + pageYScroll, w: rect.width };
            }
        };

        var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
        gallery.init();
    };

    var galleryElements = document.querySelectorAll(gallerySelector + ' figure a');
    for (var i = 0; i < galleryElements.length; i++) {
        galleryElements[i].onclick = function (event) {
            event.preventDefault();
            var index = Array.prototype.indexOf.call(galleryElements, this);
            openPhotoSwipe(index);
            return false;
        };
    }
};

// Initializing PhotoSwipe
initPhotoSwipeFromDOM('.my-gallery');
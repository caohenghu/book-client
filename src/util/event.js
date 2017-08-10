const hasTouch = 'ontouchstart' in document;

let event = null;

if (hasTouch) {
    event = {
        MOUSE_DOWN: 'touchstart',
        MOUSE_MOVE: 'touchmove',
        MOUSE_UP: 'touchend'
    }
} else {
    event = {
        MOUSE_DOWN: 'mousedown',
        MOUSE_MOVE: 'mousemove',
        MOUSE_UP: 'mouseup'
    }
}

// 阻止ios回弹
$(window).on('scroll.elasticity', function (e) {
    e.preventDefault();
}).on('touchmove.elasticity', function (e) {
    e.preventDefault();
});

// 阻止拖拽图片打开新窗口
$(document).on('dragstart', 'img', function (e) {
    e.preventDefault();
});

export {
    hasTouch,
    event
};
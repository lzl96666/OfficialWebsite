var navLeft;
$(function() {
    setIframeHeight('menuFrame');

})
$(window).scroll(function() {
    navLeft = -$(window).scrollLeft();
    $(".header").css("left", navLeft);
})

function setIframeHeight(id) {
    try {
        var iframe = document.getElementById(id);
        if (iframe.attachEvent) {
            iframe.attachEvent("onload", function() {
                iframe.height = iframe.contentWindow.document.documentElement.scrollHeight;
            });
            return;
        } else {
            iframe.onload = function() {
                iframe.height = iframe.contentDocument.body.scrollHeight;
            };
            return;
        }
    } catch (e) {
        throw new Error('setIframeHeight Error');
    }
}

function fnMenuSelected(index) {
    var menus = $('#menu').children("span").children("a");
    for (var i = 0; i < menus.length; i++) {
        if (index == i) {
            $(menus[i]).addClass("active")
            document.getElementById('menuFrame').scrollIntoView();
        } else {
            $(menus[i]).removeClass("active")
        }
    }
}
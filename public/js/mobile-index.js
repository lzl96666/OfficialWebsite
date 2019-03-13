$(document).ready(function() {
    $("#header").load('../common/header.html')
    $("#toTop").load('../common/toTop.html')
    $("#footer").load('../common/footer.html')
    var mySwiper = new Swiper('.swiper-container', {
        loop: true, // 循环模式选项
        autoplay: true,
        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },

    })
})
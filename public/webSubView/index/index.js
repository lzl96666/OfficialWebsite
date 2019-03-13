$(document).ready(function() {
    // 初始化swiper
    var mySwiper = new Swiper('.swiper-container', {
        // direction: 'vertical', // 垂直切换选项
        loop: true, // 循环模式选项
        autoplay: true,
        // autoHeight: true,

        // 如果需要分页器
        pagination: {
            el: '.swiper-pagination',
        },
    })
})

function fnBannerTo(data) {
    if (data == '产品') {
        window.location.href = "../product/product.html"
            //    父窗口方法
        parent.fnMenuSelected(1);
    } else if (data == '关于我们') {
        window.location.href = "../about/about.html"
            //    父窗口方法
        parent.fnMenuSelected(4);
    }

}
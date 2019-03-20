function fnOpenMenu() {
    if ($(".menu-open").css("display") == 'none') {
        $(".menu-open").slideDown();
        $(".menu").addClass("close")
    } else {
        $(".menu-open").slideUp();
        $(".menu").removeClass("close")
    }
}
// 回到首页
function fnToIndex() {
    fnOpenMenu();
    window.location.href = "/"
}
// 产品页
function fnToProduct() {
    fnOpenMenu();
    window.location.href = "/mobileSubView/product/product.html"
}
// 实例报告
function fnToSampleReport() {
    fnOpenMenu();
    window.location.href = "/mobileSubView/sample-report/sample-report.html"
}
// 服务流程
function fnToProcess() {
    fnOpenMenu();
    window.location.href = "/mobileSubView/process/process.html"
}
// 关于我们
function fnToAboutUs() {
    fnOpenMenu();
    window.location.href = "/mobileSubView/about/about.html"
}
// 
function fnToTop() {
    fnOpenMenu();
    $('html , body').animate({ scrollTop: 0 }, 'slow');
}
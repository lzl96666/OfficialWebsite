$(document).ready(function() {
    $("#header").load('../../common/header.html');
    $("#toTop").load('../../common/toTop.html');
    $("#footer").load('../../common/footer.html')
    $.ajax({
        url: '/json/product.json',
        type: 'get',
        dataType: 'json',
        success: function(res) {
            // 肿瘤疾病
            var data = res.tumor;
            $("#test01-num").html(data.length);
            for (i = 0; i < data.length; i++) {
                data[i] = data[i].split(";;")

            }
            for (i = 0; i < data.length; i++) {
                var html = '';
                var col1 = fnAyyReturn(data[i]);
                var col2 = fnAyyReturn(data[i + 1]);
                var col3 = fnAyyReturn(data[i + 2]);
                html += '<tr>'
                html += fnHTMLReturn(col1);
                html += fnHTMLReturn(col2);
                html += fnHTMLReturn(col3);
                html += '</tr>';
                i += 2;
                $("#test01").append(html);
            }
            //   常见疾病
            var data = res.common;
            $("#test02-num").html(data.length);
            for (i = 0; i < data.length; i++) {
                data[i] = data[i].split(";;")

            }
            for (i = 0; i < data.length; i++) {
                var html = '';
                var col1 = fnAyyReturn(data[i]);
                var col2 = fnAyyReturn(data[i + 1]);
                var col3 = fnAyyReturn(data[i + 2]);
                html += '<tr>'
                html += fnHTMLReturn(col1);
                html += fnHTMLReturn(col2);
                html += fnHTMLReturn(col3);
                html += '</tr>';
                i += 2;
                $("#test02").append(html);
            }
            //   常见传染病
            var data = res.infectious;
            $("#test03-num").html(data.length);
            for (i = 0; i < data.length; i++) {
                data[i] = data[i].split(";;")

            }
            for (i = 0; i < data.length; i++) {
                var html = '';
                var col1 = fnAyyReturn(data[i]);
                var col2 = fnAyyReturn(data[i + 1]);
                var col3 = fnAyyReturn(data[i + 2]);
                html += '<tr>'
                html += fnHTMLReturn(col1);
                html += fnHTMLReturn(col2);
                html += fnHTMLReturn(col3);
                html += '</tr>';
                i += 2;
                $("#test03").append(html);
            }
        }
    });
    // 滚动一定距离
    $(window).scroll(function() {
        //获取垂直滚动的距离
        var scrollTop = $(document).scrollTop();
        console.log(scrollTop);
        if (scrollTop >= 6265) {
            $(".buy").css("position", "relative");
        } else {
            $(".buy").css({
                "position": "fixed",
                "bottom": "0"
            });
        };
    });
})

function fnAyyReturn(arr) {
    if (typeof(arr) == "undefined") {
        arr = ['', ''];
    } else {
        if (arr.length < 2) {
            arr = [arr[0], '']
        }
    }
    return arr
}

function fnHTMLReturn(arr) {
    html = '';
    html += '<td><div class="content"><span>';
    html += arr[0];
    html += '</span><span>'
    html += arr[1]
    html += '</span><div></td>';
    return html
}

function weidian() {
    window.location.href = "https://weidian.com/item.html?itemID=2620730653";
}
$(function () {
    $.ajax({
        url: '/json/product.json',
        type: 'get',
        dataType: 'json',
        success: function (data) {

            $("#table1-num").text("肿瘤疾病【" + data.tumor.length + "项】");
            $("#table2-num").text("常见疾病【" + data.common.length + "项】");
            $("#table3-num").text("常见传染病【" + data.infectious.length + "项】");
            //常见疾病
            var rows2 = 0;
            if (data.common.length % 3 == 0) {
                rows2 = data.common.length / 3;
            } else {
                rows2 = data.common.length / 3 + 1;
            }
            for (var i = 0; i < data.common.length; i++) {
                var common = "";
                common += '<tr>';
                //第一个td
                common += dealJson(data.common[i]);
                //第二个td
                common += dealJson(data.common[i + 1]);
                //第三个td
                common += dealJson(data.common[i + 2]);
                common += '</tr>';
                i += 2;
                $("#item2").append(common);
            }

            //肿瘤疾病
            for (var i = 0; i < data.tumor.length; i++) {
                var tumor = "";
                tumor += '<tr>';
                //第一个td
                tumor += dealJson(data.tumor[i]);
                //第二个td
                tumor += dealJson(data.tumor[i + 1]);
                tumor += '</tr>';
                i += 1;
                $("#item1").append(tumor);
            }

            //肿瘤疾病添加空的tr
            var rows = 0;
            if (data.tumor.length % 2 == 0) {
                rows = data.tumor.length / 2;
            } else {
                rows = data.tumor.length / 2 + 1;
            }
            for (var i = 0; i < (rows2 - rows); i++) {
                var tumor = "";
                tumor += '<tr>';
                tumor += '<td>';
                tumor += '</td>';
                tumor += '<td>';
                tumor += '</td>';
                tumor += '</tr>';
                $("#item1").append(tumor);
            }

            //常见传染病
            for (var i = 0; i < rows2; i++) {
                if (i < data.infectious.length) {
                    var infectious = "";
                    infectious += '<tr>';
                    infectious += dealJson(data.infectious[i]);
                    infectious += '</tr>';
                    $("#item3").append(infectious);
                } else { //常见传染病添加空的tr
                    var infectious = "";
                    infectious += '<tr>';
                    infectious += '<td>';
                    infectious += '</td>';
                    infectious += '</tr>';
                    $("#item3").append(infectious);
                }
            }
        }
    })
})

function dealJson(data) {
    if (typeof (data) == "undefined") {
        data = "";
    }
    var str = "";
    str += '<td>';
    str += '<div class="table-content">';
    var arr = data.split(";;");
    if (arr.length < 2) {
        arr = [arr[0], ""]
    }
    str += '<span>';
    str += arr[0];
    str += '</span>';
    str += '<span>';
    str += arr[1];
    str += '</span>';
    str += '</div>';
    str += '</td>';
    return str;
}

function weidian() {
    window.open("https://weidian.com/item.html?itemID=2620730653");
}
//定义方法
function ajax(method, url, OKcallback, catchcallback, async) {
    //发送异步请求
    //创建核心对象
    var xmlhttp;
    if (window.XMLHttpRequest) {
        // code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp = new XMLHttpRequest();
    }
    else {
        // code for IE6, IE5
        xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    }

    // 建立连接
    /*
        参数：
            1. 请求方式：GET、POST
                * get方式，请求参数在URL后边拼接。send方法为空参
                * post方式，请求参数在send方法中定义
            2. 请求的URL：
            3. 同步或异步请求：true（异步）或 false（同步）

     */
    xmlhttp.open(method, url, async);
    //发送请求
    xmlhttp.send();

    //接受并处理来自服务器的响应结果
    //获取方式 ：xmlhttp.responseText
    //当服务器响应成功后再获取
    //当xmlhttp对象的就绪状态改变时，触发事件onreadystatechange。
    xmlhttp.onreadystatechange = function () {
        //判断readyState就绪状态是否为4，判断status响应状态码是否为200
        if (xmlhttp.readyState === XMLHttpRequest.DONE && xmlhttp.status === 200) {
            //获取服务器的响应结果
            var responseText = xmlhttp.responseText;
            OKcallback(responseText);
        } else {
            catchcallback(xmlhttp.status);
        }
    }
}
function ajaxwithoutcatch(method, url, callback, async) {
    ajax(method, url, callback, function duel() { }, async);
    //没有失败
}
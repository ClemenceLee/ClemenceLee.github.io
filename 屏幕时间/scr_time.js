function time(){
    var time = new Date();
    var curhour;
    var curmin;
    var cursec;
    var year;
    var month;
    var day;

    year = time.getFullYear();
    month = time.getMonth() + 1;
    // getMonth是从0-11噢！
    day = time.getDate();
    // getDate获取日数
    document.getElementsByClassName("cd_year")[0].innerHTML = year;
    document.getElementsByClassName("cd_month")[0].innerHTML = month;
    document.getElementsByClassName("cd_day")[0].innerHTML = day;
    // gEBCN不要忘加数组形式

    var hour;
    var min;
    var sec;
    // 因为有一个额外步骤，多搞一个变量用用吧！
    // 以下ifelse语句们是用于十以内的数的，单个数字好丑
    var curhour = time.getHours();
    if(curhour >= 0 && curhour <= 9){
        hour = "0" + curhour;
        // 变成字符串了！
    }
    else{
        hour = curhour;
    }

    var curmin = time.getMinutes();
    if(curmin >= 0 && curmin <= 9){
        min = "0" + curmin;
        // 变成字符串了！
    }
    else{
        min = curmin;
    }
    var cursec = time.getSeconds();
    if(cursec >= 0 && cursec <= 9){
        sec = "0" + cursec;
        // 变成字符串了！
    }
    else{
        sec = cursec;
    }

    document.getElementsByClassName("ct_hour")[0].innerHTML = hour;
    document.getElementsByClassName("ct_min")[0].innerHTML = min;
    document.getElementsByClassName("ct_sec")[0].innerHTML = sec;
}
window.setInterval("time()", 1000);
// 每1秒调用一次函数
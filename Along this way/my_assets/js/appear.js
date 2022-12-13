// 获取所有的box
let boxList = document.querySelectorAll('.box');

// 监听滚动
window.addEventListener('scroll', scrollLoad);

// 滚动加载函数
function scrollLoad(){

    // 1.定义一个目标值
    let targetValue = window.innerHeight * 0.8;
    // 屏幕高度的80%

    // 2.获取每一个box距离最顶部的值
    boxList.forEach(box=>{
        let boxTop = box.getBoundingClientRect().top;
        // 获取每个盒子距离顶部的值

        if(boxTop <= targetValue){
            // 滑到小于等于的位置
            // 调用show-center使位置变为0
            box.classList.add('show-center');
            // 添加元素类名
        }
        else{
            box.classList.remove('show-center');
        }
    })


}
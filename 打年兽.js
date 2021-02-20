if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
sleep(1000);
var thread1=threads.start(function(){
    var x=0;
    var y=0;
    while(true){
    
    //toastLog("开始找色");
    //指定在位置(100, 220)宽高为400*400的区域找色。
    //#75438a是编辑器默认主题的棕红色字体(数字)颜色，位置大约在第5行的"2000"，坐标大约为(283, 465)
        var point = findColorInRegion(captureScreen(), "#fffe6f94", 170, 400, 730,1150);
        if(point){
            x=point.x;
            y=point.y;
            press(x ,y,40);
            sleep(40);
        }else{
            if(colors.toString(images.pixel(captureScreen(), 1000, 2000))=="#ff3f0f28"){
                var point = findColorInRegion(captureScreen(), "#fff81e33", 65, 1172, 1100,750);
                if(point){
                   press(point.x,point.y,40);
                   sleep(38);
                }
            }
            press(x ,y,40);
            sleep(38);
        }}
});
className("android.view.View").text("再玩一局").waitFor();
thread1.interrupt();
    
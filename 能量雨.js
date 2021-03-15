auto();

setScreenMetrics(1176, 2400);

if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
var width=device.width;
var height=device.height;
toast("将于5秒钟后开始点击");
sleep(1000);
toast("请切换至立即开始页面");
sleep(3000);
click(0.5*width,0.655*height);
sleep(2800);
var thread1=threads.start(function(){
    var x=500;
    var y=850;
    var delta=100;
    while(true){
        var time_start=new Date();
        var point = findColorInRegion(captureScreen(), "#219300", 100,0.275*height, 0.9*width,250);
        if(point){
            x=point.x+20;
            var time_end=new Date();
            delta=(time_end.getTime()-time_start.getTime())/30*100
            
            y=point.y+delta;
            press(x ,y,40);
            sleep(50);
        }else{
            press(x,y,40);
            sleep(50);
            }
    }
});

textContains("感谢你又为地球做出了贡献").waitFor();
thread1.interrupt();

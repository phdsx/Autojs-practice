/*
version : 0.2.4
author  : phdsx
*/
auto();
setScreenMetrics(1176, 2400);

if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
}
var width=device.width;
var height=device.height;

sleep(1000);
var thread1=threads.start(function(){
    var x=500;
    var y=850;
    while(true){
        var point = findColorInRegion(captureScreen(), "#ff219300", 100,0.275*height, 0.9*width,250);
        if(point){
            x=point.x+20;
            y=point.y+100;
            press(x ,y,40);
            sleep(50);
        }else{
            press(x,y,40);
            sleep(50);
            }
    }
});

sleep(15000);
thread1.interrupt();

function dianji(keyword){
    text(keyword).waitFor();
    click(text(keyword).findOne().bounds().centerX(),text(keyword).findOne().bounds().centerY());
}

function count(){
    
    var a=textContains("个瞬间").find();
    for(var i=0;i<a.length-1;i++){
        log(a[i].text())
    }
    swipe(650,2175,650,310,1500)
}

auto();
setScreenMetrics(1176, 2400);

home();
app.launchApp("Soul");

dianji("自己");
sleep(500);
dianji("设置");
sleep(500);
dianji("隐私");
sleep(500);
dianji("黑名单");
sleep(500);


function count_num(){
    var status=true;
    while(status){
        var name_list =id("item_blacklist_sign").className("android.widget.TextView").find();
        var black_list=new Array();
        var days_list=id("item_blacklist_time").className("android.widget.TextView").find();
        var last_text=black_list[-1]
        for(var i=0;i<days_list.length;i++){
            var temp_text=name_list[i].text().toString()+days_list[i].text().toString();
            black_list.push(temp_text);
        };
        swipe(500,2070,400,400,1500);
        if(last_text==black_list[-1]){
            status=false;
        }
    };
    return black_list
}

function dianji(keyword){
    text(keyword).waitFor();
    var pos=text(keyword).findOne();
    click(pos.centerX,pos.centerY);
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
var blacklist=count_num();
log("黑名单数量为："+blacklist.length)


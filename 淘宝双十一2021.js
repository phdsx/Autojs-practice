//位置点击函数
function click_pos(obj){
    var obj_box=obj.findOne().bounds();
    click(obj_box.centerX(),obj_box.centerY());
}

//随机等待函数
function get_gap(start,end){
    sleep(start,end);
}

auto();

//确定分辨率
setScreenMetrics(1176, 2400);

//启动快淘宝客户端
app.launchApp('快淘宝');
//等待进入主界面
text("首页").waitFor();

toast('已进入主界面');

get_gap(500,2000);

click_pos(className('android.widget.RelativeLayout'));

get_gap(800,1500);

id('searchEdit').findOne().setText('20亿红包');

get_gap(900,1200);

click_pos(text('搜索'));

get_gap(2000,4000);



click_pos(text('赚喵糖'));
get_gap(800,1900);
while(text('去浏览').exists()){
    toast('存在未完成浏览任务');
    click_pos(text('去浏览'));
    get_gap(1500,2500);
    if(textContains('跟主播聊什么').exists()!=true){
        swipe(device.width/2,device.height-500,device.width/2,0,random(400,800));
    };
    toast('开始浏览');
    get_gap(20000,25000);
    toast('浏览完成');
    back();
    get_gap(1400,1800);

};
toast('浏览任务完成');


    



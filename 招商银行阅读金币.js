setScreenMetrics(1176, 2400);

auto();
app.launchApp("招商银行");
text("收支明细").waitFor();
var search_box=id("textMarquee").findOne().bounds();
click(search_box.centerX(),search_box.centerY());
text("取消").waitFor();

textContains("财商成长").findOne().click();
text("财商成长计划").waitFor();
text("财商成长计划").findOne().click();

textContains("现金红包").waitFor();
swipe(300,1200,300,300,1000);

text("去阅读").waitFor();
text("去阅读").findOne().click();

click(484,275);
sleep("1000");

for(var i=0;i<5;i++){
    swipe(532,1300,532,1300-450*i,1000)
    click(532,1253);
    sleep("2000");

    click(210,2190);
    sleep("2000");

    className("android.view.View").text("写评论").findOne().click();
    sleep("1000");

    className("android.widget.EditText").findOne().setText("祝看到我评论的朋友发大财");
    className("android.view.View").text("发布").findOne().click();
    back();
    sleep(1000);
    click(484,275);
    sleep("1000");
}






function count_num(){
    var status=true;
    var black_list=new Array();
    while(status){
        var name_list =id("item_blacklist_sign").className("android.widget.TextView").find();
        
        var days_list=id("item_blacklist_time").className("android.widget.TextView").find();
        var last_text=black_list[black_list.length-1]
        for(var i=0;i<days_list.length;i++){
            var temp_text=name_list[i].text().toString()+days_list[i].text().toString();
            if(black_list.indexOf(temp_text) == -1){
                black_list.push(temp_text);
            };
        };
        swipe(500,2070,400,400,500);
        
        if(black_list.length>5){
            if(last_text==black_list[black_list.length-1]){
                status=false;
                log(last_text,black_list[black_list.length-1])
            }
        };
        log(black_list.length);
    };
    return black_list
}

function dianji(keyword){
    text(keyword).waitFor();
    var pos=text(keyword).findOne();
    click(pos.centerX,pos.centerY);
}


var blacklist=count_num();
toastLog("黑名单数量为："+blacklist.length);

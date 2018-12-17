
var banner=document.querySelectorAll("#banner img");
var btn=document.querySelectorAll("#banner li");
var next=document.querySelector(".next");
var pre=document.querySelector(".pre");
var a=0;
// 切换图片封装
function change(){
for(var i=0;i<banner.length;i++){
    banner[i].style.opacity="0";
}
banner[a].style.opacity="1";
clearBtn();
}
// 去掉其余btn颜色
function clearBtn(){
    for(var t=0;t<btn.length;t++){
        btn[t].style.background="#fff"
    }
    btn[a].style.background="red"
}
// btn绑定点击事件
for(var k=0;k<btn.length;k++){
        btn[k].index=k;
    btn[k].onclick=function(){
       a=this.index;
        
        change();
    }
}
next.onclick=function(){
    a=a+1;
    if(a>=5){
        a=0;
    }
    change();
}
pre.onclick=function(){
    a=a-1;
    if(a<0){
        a=5;
    }
    change();
}


setInterval(function(){
    if(a==5){
    a=-1;
}
    a+=1;
    change();
}, 2000)
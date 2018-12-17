var cont=document.querySelector(".cont");
var cont2=document.querySelector(".cont2");
var huan=document.querySelector(".huan");
var ying=document.querySelector(".ying");
var pwsyz=document.querySelector(".pwsyz");
var masyz=document.querySelector(".masyz");
var em=document.querySelector("#em");
huan.onmouseover=function(){
    huan.style.color=" #000";
    ying.style.color=" #000";
    huan.style.color=" #e61436";
}
ying.onmouseover=function(){
    huan.style.color=" #000";
    ying.style.color=" #000";
    ying.style.color=" #e61436";
}
huan.onclick=function(){
    cont.style.display="block";
    cont2.style.display="none";
    huan.style.color=" #e61436";
}
masyz.onclick=function(){
    cont.style.display="block";
    cont2.style.display="none";
    masyz.style.display="none";
    pwsyz.style.display="block";
}
pwsyz.onclick=function(){
    cont.style.display="none";
    cont2.style.display="block";
    pwsyz.style.display="none";
    masyz.style.display="block";
    em.value="请输入手机号"
}
ying.onclick=function(){
    cont2.style.display="block";
    cont.style.display="none";
    ying.style.color=" #e61436";
    em.value="网易邮箱账号"
}
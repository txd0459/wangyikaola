var xq=document.querySelector(".xq");
var pg=document.querySelector(".pg");
var xqN=document.querySelector(".xq_nei");
var pgN=document.querySelector(".pg_nei");
var shang=document.querySelector(".shang");
xq.onclick=function(){
    pgN.style.display="none";
    xqN.style.display="block";
    xq.style.height="48px";
    xq.style.borderTop="3px solid red";
    xq.style.color="red";
    pg.style.height="50px";
    pg.style.borderTop="none";
    document.documentElement.scrollTop=1092;
    pg.style.color="#999";
}
pg.onclick=function(){
    pgN.style.display="block";
    xqN.style.display="none";
    pg.style.height="48px";
    pg.style.borderTop="3px solid red";
    pg.style.color="red";
    xq.style.height="50px";
    xq.style.borderTop="none";
    xq.style.color="#999";
    document.documentElement.scrollTop=1092;
}
document.onscroll=function(){
    if(document.documentElement.scrollTop>=1092){
        console.log("123456")
        shang.style.position="fixed"
        shang.style.top="0";
        // shang.style.left="0";
        shang.style.zIndex="999";
    }
    if(document.documentElement.scrollTop<=1092){
        shang.style.position="static";
    }
}
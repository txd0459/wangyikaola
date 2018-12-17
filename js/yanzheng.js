var inp=document.querySelectorAll(".cont input");
var baoc=document.querySelector(".baoc");
var btn=document.querySelector(".btn");
var login_box=document.querySelector(".login_box");
var huadong=document.querySelector(".huadong");
var ig=document.querySelector(".ig");
var res1,res2,res3,res4,a,b,c;
ig.onmousedown=function(ev){
    var x=ev.offsetX;
document.onmousemove=function(ev){
    console.log(ev.pageX);

    if(ev.pageX>=1020){
        ig.style.left="195px";
    }
   else if(ev.pageX<=820){
         ig.style.left="1px";
    }
   else{
    console.log("ccccc")
        ig.style.left=ev.pageX-830-x+"px";
}

}
}
document.onmouseup=function(){
    document.onmousemove=null;
}






inp[0].onblur=function(){
        res1=/^1\d{10}$/.test(this.value);
       if(!res1){
        baoc.innerHTML="！请输入可用手机号"
        }
        else{
            baoc.innerHTML="";
            a=1;
        }
    }
inp[0].onfocus=function(){
    this.value="";
}
inp[1].onblur=function(){
       if(this.value==""){
        baoc.innerHTML="！验证码不能为空"
        }
        else{
            baoc.innerHTML="";
            b=1;
        }
    }
inp[1].onfocus=function(){
    this.value="";
}
inp[2].onblur=function(){
       if(this.value==""){
        baoc.innerHTML="！密码不能为空"
        }
        else{
            baoc.innerHTML="";
            c=1;
        }
    }
inp[2].onfocus=function(){
    this.value="";
}
btn.onclick=function(){
    if(a===1&&b===1&&c===1&&inp[3].checked=="1"){
        alert("注册成功");
    }
    else{
        baoc.innerHTML="请输入正确格式";
    }
}
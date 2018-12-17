     var box=document.getElementById('box');
                  flag=true;
                    box.onclick=function(){
        if(flag){
            box.style.background="url(duihao.jpg)";
        }else{
            box.style.background="";
        }
        flag=!flag;
    }
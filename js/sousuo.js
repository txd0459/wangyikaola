var txt=document.getElementById("sousuo_txt")
            txt.onfocus=function(){
                sousuo_xiala.style.display="block"
                txt.onkeyup=function(){
                    var ajax=new XMLHttpRequest
                    ajax.open("get","1.php?cont="+txt.value,true)
                    ajax.send()
                    ajax.onreadystatechange=function(){
                        if(ajax.readyState===4&&ajax.status===200){
                            var res=JSON.parse(ajax.responseText).suggestKeycords;
                            var str=""
                            res.forEach(item=>{
                                str+=`<li><a href="https://www.kaola.com/search.html?zn=top&key=${item}&searchRefer=searchbutton">${item}</a></li>`
                            })
                            sousuo_xiala.innerHTML=str
                        }
                    }
                }
            }
            document.onclick=function(ev){
                if(ev.target.nodeName==="INPUT"){
                    sousuo_xiala.style.display="block" 
                }else{
                    sousuo_xiala.style.display="none"
                }
            }
        
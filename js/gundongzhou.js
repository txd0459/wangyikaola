  var gdz=document.querySelectorAll("#gdz li");
  var timer=null;
  // 1楼 0 
  // 2楼 600
  // 3楼 1200
  // 4楼 1800
  for(var i=0;i<gdz.length;i++){
      gdz[i].index=i;
      gdz[i].onclick=function(){
          // 判断 向上还是向下
        if(1200*this.index>=document.documentElement.scrollTop){
            layerMove("bottom",1200*this.index)
        }else{
            layerMove("bottom",1200*this.index)
        }   
        // 改变楼层颜色
        for(var k=0;k<li.length;k++){
            li[k].style.background="#fff";
        }
        li[this.index].style.background="red";
      }
  }







  function layerMove(dir,end){
     clearInterval(timer);
     if(dir==="bottom"){
        timer=setInterval(function(){
            document.documentElement.scrollTop=document.documentElement.scrollTop-10;
            if(document.documentElement.scrollTop<=end){
                document.documentElement.scrollTop=end;
                clearInterval(timer)
            }
         })
     }else{
        timer=setInterval(function(){
            document.documentElement.scrollTop=document.documentElement.scrollTop+10;
            if(document.documentElement.scrollTop>=end){
                document.documentElement.scrollTop=end;
                clearInterval(timer)
            }
         }) 
     }
 }
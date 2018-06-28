/**
 * Created by Administrator on 2018/6/5.
 */
window.onload=function () {
    
    var  btnbox=document.getElementsByClassName("btnbox")[0];
    var btn=btnbox.getElementsByTagName("li");
    var bannerbox=document.getElementsByClassName("con")[0];
    var banner=bannerbox.getElementsByTagName("a");
    var container=document.getElementsByClassName("container")[0];
    for(var i=0;i<btn.length;i++){
        btn[i].index=i;
        btn[i].onmouseover=function(){
            for(var j=0;j<banner.length;j++){
                btn[j].style.background="white";
                banner[j].style.display="none";
            }
            this.style.background="#734605";
            banner[this.index].style.display="block"
        }
       btn[i].onmouseout=function(){
           num=this.index;

       }
        //定时器

    }
    var num=0;
    var t=setInterval(move,2000);
    function move(){
        num++;
        if(num>5){
            num=0;
        }
        for(var i=0;i<btn.length;i++){
            btn[i].style.background="#fff";
            banner[i].style.display="none";
        }
        btn[num].style.background="#734605";
        banner[num].style.display="block"
    }
    container.onmouseover=function(){
        clearInterval(t)
    }
    container.onmouseout=function(){
        t=setInterval(move,2000)
    }
}
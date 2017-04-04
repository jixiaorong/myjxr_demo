/**
 * Created by jixiaorong on 2017/3/28.
 */


    var erwei=document.querySelector("#erwei");
    var erweiBig=document.querySelector("#erweiBig");
    erwei.onmouseover=function(){
        erweiBig.style.display="block";
        console.log(45);
    }
    erwei.onmouseleave=function(){
        erweiBig.style.display="none";
    }
    var ul=document.getElementById("ul2")
    var imgs=ul.getElementsByTagName("li")
    var circles=document.getElementById("ol").getElementsByTagName("li");
    var bannerc=document.getElementById("bannerc");
var width=bannerc.offsetWidth;
//   点击小圆 切换到当前轮播图
for(var i=0;i<circles.length;i++){
    circles[i].index=i;
    circles[i].onmouseover=function(){
        console.log(-(width*this.index)+"px");
        ul.style.left=-(width*this.index)+"px";
    }
}

var index=0;
    var timer=setInterval(function(){
        ul.style.left=-(width*index)+"px";
        index++;
        if(index>=4){
            index=0;
        }
        console.log(index);
    },1000)

var T=document.getElementById("time");
var spans=document.querySelectorAll("#time span");
console.log(spans);
function downTime(){
    var time=60*60*5
    setInterval(function(){
        time--;
        var h=Math.floor(time/(60*60));
        var m=Math.floor(time%(60*60)/60);
        var s=Math.floor(time%60);
        spans[0].innerText=Math.floor(h/10);
        spans[1].innerText=Math.floor(h%10);
        spans[3].innerText=Math.floor(m/10);
        spans[4].innerText=Math.floor(m%10);
        spans[6].innerText=Math.floor(s/10);
        spans[7].innerText=Math.floor(s%10);
    },1000);



}
downTime();
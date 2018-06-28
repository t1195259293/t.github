/**
 * Created by Administrator on 2018/6/14.
 */
window.onload=function () {
/*        !function(e,t){function i(){o=1,e.devicePixelRatioValue=o,s=1/o;
     var t=a.createElement("meta");
     if(t.setAttribute("name","viewport"),t.setAttribute("content","initial-scale="+s+", maximum-scale="+s+", minimum-scale="+s+", user-scalable=no"),d.firstElementChild)d.firstElementChild.appendChild(t);
     else{var i=a.createElement("div");
     i.appendChild(t),a.write(i.innerHTML)}}function n(){var e=Math.min(d.getBoundingClientRect().width,750);r=100*e/t.desinWidth,d.style.fontSize=r+"px"}var a=e.document,d=a.documentElement,o=(e.devicePixelRatio,1),s=1;i();var l,r=100;
     t.desinWidth=640,t.baseFont=18,t.init=function(){e.addEventListener("resize",function(){clearTimeout(l),l=setTimeout(n,300)},!1),e.addEventListener("pageshow",function(e){e.persisted&&(clearTimeout(l),l=setTimeout(n,300))},!1),"complete"===a.readyState?a.body.style.fontSize=t.baseFont*o+"px":a.addEventListener("DOMContentLoaded",function(){a.body.style.fontSize=t.baseFont*o+"px"},!1),n(),d.setAttribute("data-dpr",o)}}(window,window.adaptive||(window.adaptive={}));
     window['adaptive'].desinWidth = 750;
     window['adaptive'].baseFont = 18;
     window['adaptive'].init();*/
/*    function refreshRem(){
        var docEl = window.document.documentElement;
        var width = docEl.documentElement.getBoundingClientRect().width;

        var rootSize = width/10;
        docEl.style.fontSize = rootSize + 'px';
    }*/
/*    (function (doc, win) {
    var docEl = doc.documentElement,
        resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
        recalc = function () {
            var clientWidth = docEl.clientWidth;
            if (!clientWidth) return;
            if(clientWidth>=640){
                docEl.style.fontSize = '100px';
            }else{
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            }
        };
    if (!doc.addEventListener) return;
    win.addEventListener(resizeEvt, recalc, false);
    doc.addEventListener('DOMContentLoaded', recalc, false);
})(document, window);*/
 /*   (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth > 640 ? 640 : docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 20 * (clientWidth / 320) + 'px';
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);
*/
  /*  (function (doc, win) {
        //  html
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize', recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                clientWidth = (clientWidth > 768 ) ? 768 : clientWidth ; docEl.style.fontSize = 10 * (clientWidth / 375 ) + 'px';
            };
        if (!doc.addEventListener) return; win.addEventListener(resizeEvt, recalc, false);
        recalc();
    })(document, window);
    /!*移动端适应大小*!/*/
 /*   (function(doc,win){
        var docEl = doc.documentElement;
        var resizeEvt = "onorientationchange" in win ? "orientationchange" : "resize";
        var Timer = null;
        function recalc(){
            var clientWidth = docEl.clientWidth || win.innerWidth;
            //设计稿是640px
            var initSize = (clientWidth/640) * 100;
            var fontSize = clientWidth > 768 ? 120 : (initSize < 50 ? 50 : initSize);
            docEl.style.fontSize = fontSize + "px";
        }
        doc.addEventListener("DOMContendLoaded",recalc,false);

        //转屏
        win.addEventListener(resizeEvt,function(){
            clearTimeout(Timer);
            Timer = setTimeout(recalc,300)
        },false);

        //pageshow,缓存相关
        win.addEventListener("pageshow",function(e){
            if(e.persisted){
                clearTimeout(Timer);
                Timer = setTimeout(recalc,300)
            }
        },false);

        // 初始化
        recalc();

    })(document,window);*/
/*    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                if(clientWidth>=640){
                    docEl.style.fontSize = '100px';
                }else{
                    docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
                }
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);*/

/*    (function (doc, win) {
        var docEl = doc.documentElement,
            resizeEvt = 'orientationchange' in window ? 'orientationchange' : 'resize',
            recalc = function () {
                var clientWidth = docEl.clientWidth;
                if (!clientWidth) return;
                docEl.style.fontSize = 100 * (clientWidth / 640) + 'px';
            };

        if (!doc.addEventListener) return;
        win.addEventListener(resizeEvt, recalc, false);
        doc.addEventListener('DOMContentLoaded', recalc, false);
    })(document, window);*/

}

(function() {
    //copyright JGA 2013 under MIT License
    var monster={set:function(e,t,n,r){var i=new Date,s="",o=typeof t,u="";r=r||"/",n&&(i.setTime(i.getTime()+n*24*60*60*1e3),s="; expires="+i.toGMTString());if(o==="object"&&o!=="undefined"){if(!("JSON"in window))throw"Bummer, your browser doesn't support JSON parsing.";u=JSON.stringify({v:t})}else u=escape(t);document.cookie=e+"="+u+s+"; path="+r},get:function(e){var t=e+"=",n=document.cookie.split(";"),r="",i="",s={};for(var o=0;o<n.length;o++){var u=n[o];while(u.charAt(0)==" ")u=u.substring(1,u.length);if(u.indexOf(t)===0){r=u.substring(t.length,u.length),i=r.substring(0,1);if(i=="{"){s=JSON.parse(r);if("v"in s)return s.v}return r=="undefined"?undefined:unescape(r)}}return null},remove:function(e){this.set(e,"",-1)},increment:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)+1,t)},decrement:function(e,t){var n=this.get(e)||0;this.set(e,parseInt(n,10)-1,t)}};

    // Fx.js (c) Agile Diagnosis Licensed under the terms of the MIT license.
    var Fx=function(){"use strict";function P(e,t){return e.style[t]||H(e,t)}function H(e,t){return(r?e.currentStyle:getComputedStyle(e))[t]}function B(e){return typeof e!="undefined"}function j(e){return typeof e=="number"}function F(e){return parseInt(e,10)}function I(e,t){for(var n in t){var r=t[n];r&&e.hasOwnProperty(n)&&(e[n]=r)}}function q(e){var t=e.split("-"),n=t.length;if(n>1)while(n-->1){var r=t[n];t[n]=r.charAt(0).toUpperCase()+r.slice(1)}return t.join("")}var e=document,t=window,n=navigator.appVersion,r=n.search("MSIE")>-1,i=F(n.slice(22,26)),s=r&&i<10,o="Ms Moz Webkit O".split(" "),u=o.length,a=t.performance,f=!!a&&!!a.now,l="AnimationFrame",c="cancel"+l,h="Cancel"+l,p="request"+l,d="Request"+l,v="margin",m="padding",g="scale",y="3d",b="translate",w="translate"+y,E="scrollLeft scrollTop",S=" fontSize height opacity width zoom",x="rotate",T=" ",N="Bottom",C="Left",k="Right",L="Top",A="ransform";(function(){var e=0;if(!t[p]){for(var n=0;n<u;n++){var r=o[n],i=r.toLowerCase(),s=t[i+d];if(s){t[p]=s,t[c]=t[i+h]||t[i+"CancelRequest"+l];break}}t[p]||(t[p]=function(t){var n=+(new Date),r=Math.max(0,16-(n-e)),i=setTimeout(function(){t(n+r)},r);return e=n+r,i},t[c]=clearTimeout)}})();var O=function(){var t=e.createElement("p").style,n="T"+A,r="t"+A;if(t[r])return r;for(var i=u;i--;){var s=o[i],a=s.toLowerCase()+n,f=s+n;if(B(t[a]))return a;if(B(t[f]))return f}}(),M=function(){if(r&&i<9)return 0;var t=e.body,n=e.createElement("p");n.style[O]=w+"(1px,1px,1px)",t.appendChild(n);var s=H(n,O);return t.removeChild(n),B(s)&&s.length>0&&s!=="none"}(),_={schemas:{css:"bottom left right top "+v+T+v+N+T+v+C+T+v+k+T+v+L+T+m+T+m+N+T+m+C+T+m+k+T+m+L+S,css3:b+T+w+T+x+T+x+y+T+g+T+g+y,nocss:E},no_negative:E+S,no_unit:E+" opacity zoom "+g+" "+g+y},D=function(e,n,r){var i=this;i.options={duration:300,animationStart:function(){},animationEnd:function(){},transition:"linear",unit:"px"};var s=i.options;r&&I(s,r),n=q(n);var o=Math.round,u=e.style,l=_.no_negative.indexOf(n)>0,h=n.indexOf(y)>-1,d=n===b||n===w,v=_.no_unit.indexOf(n)<0,m=v?s.unit:"",g=0,E,S,x,T,N,C,k,L,A,D,H,B,R,U,z,W,X,V,$={linear:function(e){var t=[];return k&&t.push(W*e),L&&t.push(X*e),A&&t.push(V*e),t}},J=s.transition,K=typeof J=="function"?J:$.linear;h&&!M&&(n=n.replace(y,""));var Q={css:function(e){u[n]=e+m},css3:O?function(e,t,r){var i=[];k&&i.push(e+m),L&&i.push(t+m),A&&M&&i.push(r+m),u[O]=n+"("+i.join(",")+")"}:function(e,t){d&&(k&&(u.left=o(e)+m),L&&(u.top=o(t)+m))},nocss:function(t){e[n]=t}},G={css:m?[0]:[1],css3:h?m?[0,0,0]:[1,1,1]:m?[0,0]:[1,1],nocss:[0]},Y={css:function(){var t=F(P(e,n));return isNaN(t)?G.css:[t]},css3:function(){var t=G.css3,r={scale:6,rotate:7,scale3d:8,rotate3d:9,translate:10,translate3d:12}[n];if(O){var i=P(e,O),s=i.slice(r,-1).split(",");i&&(s[0]&&(t[0]=F(s[0])),s[1]&&(t[1]=F(s[1])),s[2]&&(t[2]=F(s[2])))}else if(d){var o=P(e,"left"),u=P(e,"top");t=[F(o)||0,F(u)||0]}return t},nocss:function(){var t=e[n];return isNaN(t)?G.nocss:[t]}},Z=_.schemas;for(var et in Z){var tt=Z[et].split(" ");for(var nt=tt.length;nt--;){var rt=tt[nt];Y[rt]=Y[et],Q[rt]=Q[et]}}var it=Q[n],st=Y[n],ot=function(e){var t=K(e);k&&(E=D+t[0]),L&&(S=H+t[1]),A&&(x=B+t[2]),l&&(k&&E<0&&(E=0),L&&S<0&&(S=0),A&&x<0&&(x=0)),it(E,S,x)},ut=function(n){ot(n-N),++g,n<C?t[p](ut):(t[c](T),it(R,U,z),i.options.animationEnd(e,1e3*g/s.duration))},at=function(n,r,i){var o=s.duration;k=j(n),L=j(r),A=j(i),s.animationStart(e);var u=st();E=u[0],S=u[1],x=u[2],k&&(D=E,R=n,W=(R-D)/o),L&&(H=S,U=r,X=(U-H)/o),A&&(B=x,z=i,V=(z-B)/o),g=0,N=t.mozAnimationStartTime||(f?a.now():+(new Date)),C=N+o,T=t[p](ut)};return i.element=e,i.property=n,i.get=st,i.set=it,i.to=at,i};return D}();

    if (monster.get('cookieinfo') === 'true') {
        return false;
    }

    var container = document.createElement('div'),
        link = document.createElement('a');

    container.setAttribute('id', 'cookieinfo');
    container.setAttribute('class', 'cookie-alert');
    container.innerHTML = '<h6>Ta strona wykorzystuje pliki cookie</h6><p>Używamy informacji zapisanych za pomocą plików cookies w celu zapewnienia maksymalnej wygody w korzystaniu z naszego serwisu. Mogą też korzystać z nich współpracujące z nami firmy badawcze oraz reklamowe. Jeżeli wyrażasz zgodę na zapisywanie informacji zawartej w cookies kliknij na &bdquo;x&rdquo; w prawym górnym rogu tej informacji. Jeśli nie wyrażasz zgody, ustawienia dotyczące plików cookies możesz zmienić w swojej przeglądarce.</p>';

    link.setAttribute('href', '#');
    link.setAttribute('title', 'Zamknij');
    link.innerHTML = 'x';

    function clickHandler(e) {
        if (e.preventDefault) {
            e.preventDefault();
        } else {
            e.returnValue = false;
        }

        container.setAttribute('style', 'opacity: 1');
        new Fx(container, 'opacity', {
            duration: 300,
            animationEnd: function() {
                document.body.removeChild(container);
            }
        }).to(0);
    }

    if (link.addEventListener) {
        link.addEventListener('click', clickHandler);
    } else {
        link.attachEvent('onclick', clickHandler);
    }

    container.appendChild(link);
    document.body.appendChild(container);

    monster.set('cookieinfo', 'true', 365);

    return true;
})();
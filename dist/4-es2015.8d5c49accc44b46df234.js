(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{aBV4:function(t,e,n){"use strict";n.r(e),n.d(e,"createSwipeBackGesture",function(){return a});var r=n("6Kqc"),o=(n("y08P"),n("iWo5"));const a=(t,e,n,a,c)=>{const i=t.ownerDocument.defaultView;return Object(o.createGesture)({el:t,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:t=>t.startX<=50&&e(),onStart:n,onMove:t=>{a(t.deltaX/i.innerWidth)},onEnd:t=>{const e=i.innerWidth,n=t.deltaX/e,o=t.velocityX,a=o>=0&&(o>.2||t.deltaX>e/2),s=(a?1-n:n)*e;let u=0;if(s>5){const t=s/Math.abs(o);u=Math.min(t,540)}c(a,n<=0?.01:Object(r.h)(0,n,.9999),u)}})}}}]);
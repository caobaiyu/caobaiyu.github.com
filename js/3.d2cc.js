(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{1025:function(t,e){},1026:function(t,e){},1035:function(t,e,i){"use strict";i.r(e);var n=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"test_two_box"},[i("video",{ref:"videodom",staticClass:"video-js",attrs:{id:"myVideo"}},[i("source",{attrs:{src:"http://ivi.bupt.edu.cn/hls/cctv1hd.m3u8"}})]),i("button",{on:{click:function(e){return t.chang("cctv6")}}},[t._v("cctv6")])])};n._withStripped=!0;var s=i(507),c=(i(1027),i(1028),"http://ivi.bupt.edu.cn/hls/cctv6hd.m3u8"),o={name:"TestTwo",data:function(){return{myPlayer:null}},mounted:function(){this.initVideo()},methods:{initVideo:function(){this.myPlayer=Object(s.default)(this.$refs.videodom,{controls:!0,autoplay:"muted",preload:"auto",width:"800px",height:"400px"})},chang:function(t){switch(this.myPlayer.reset(),console.log(t),t){case"cctv6":this.myPlayer.src({type:"application/x-mpegURL",src:c}),this.myPlayer.load(c),this.myPlayer.play();break;default:this.myPlayer.src({type:"video/mp4",src:"http://vjs.zencdn.net/v/oceans.mp4"}),this.myPlayer.load("http://vjs.zencdn.net/v/oceans.mp4"),this.myPlayer.play()}}},destroyed:function(){s.default.dispose()}},a=(i(1075),i(283)),r=Object(a.a)(o,n,[],!1,null,"ce2330ee",null);r.options.__file="src/views/expl/qd.vue";e.default=r.exports},1059:function(t,e,i){},1075:function(t,e,i){"use strict";var n=i(1059);i.n(n).a}}]);
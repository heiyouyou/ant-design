webpackJsonp([2],{653:function(o,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var c=n(652);e.default={render:function(){var o=arguments[0],e={props:{action:"/upload.do",multiple:!0,beforeUpload:function(o,e){return console.log(o,e),new Promise(function(e){console.log("start check"),setTimeout(function(){console.log("check finshed"),e(o)},3e3)})}},on:{start:function(o){console.log("onStart",o.name)},success:function(o){console.log("onSuccess",o)},error:function(o){console.log("onError",o)}}};return o("div",{style:{margin:"100px"}},[o("div",[o(c.a,e,[o("a",["开始上传"])])])])}}}});
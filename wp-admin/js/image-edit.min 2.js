/*! This file is auto-generated */
!function(g){var r=wp.i18n.__,d=window.imageEdit={iasapi:{},hold:{},postid:"",_view:!1,handleCropToolClick:function(i,t,e){var a=g("#image-preview-"+i),o=this.iasapi.getSelection();isNaN(o.x1)&&(this.setCropSelection(i,{x1:0,y1:0,x2:a.innerWidth(),y2:a.innerHeight(),width:a.innerWidth(),height:a.innerHeight()}),o=this.iasapi.getSelection()),0===o.x1&&0===o.y1&&0===o.x2&&0===o.y2?(this.iasapi.setSelection(0,0,a.innerWidth(),a.innerHeight(),!0),this.iasapi.setOptions({show:!0}),this.iasapi.update()):d.crop(i,t,e)},intval:function(i){return 0|i},setDisabled:function(i,t){t?i.removeClass("disabled").prop("disabled",!1):i.addClass("disabled").prop("disabled",!0)},init:function(i){var t=this,e=g("#image-editor-"+t.postid),a=t.intval(g("#imgedit-x-"+i).val()),o=t.intval(g("#imgedit-y-"+i).val());t.postid!==i&&e.length&&t.close(t.postid),t.hold.w=t.hold.ow=a,t.hold.h=t.hold.oh=o,t.hold.xy_ratio=a/o,t.hold.sizer=parseFloat(g("#imgedit-sizer-"+i).val()),t.postid=i,g("#imgedit-response-"+i).empty(),g("#imgedit-panel-"+i).on("keypress",'input[type="text"]',function(i){var t=i.keyCode;if(36<t&&t<41&&g(this).trigger("blur"),13===t)return i.preventDefault(),i.stopPropagation(),!1}),g(document).on("image-editor-ui-ready",this.focusManager)},toggleEditor:function(i,t,e){i=g("#imgedit-wait-"+i);t?i.fadeIn("fast"):i.fadeOut("fast",function(){e&&g(document).trigger("image-editor-ui-ready")})},toggleHelp:function(i){i=g(i);return i.attr("aria-expanded","false"===i.attr("aria-expanded")?"true":"false").parents(".imgedit-group-top").toggleClass("imgedit-help-toggled").find(".imgedit-help").slideToggle("fast"),!1},getTarget:function(i){return g('input[name="imgedit-target-'+i+'"]:checked',"#imgedit-save-target-"+i).val()||"full"},scaleChanged:function(i,t,e){var a=g("#imgedit-scale-width-"+i),o=g("#imgedit-scale-height-"+i),s=g("#imgedit-scale-warn-"+i),n="",i="";!1!==this.validateNumeric(e)&&(t?(i=""!==a.val()?Math.round(a.val()/this.hold.xy_ratio):"",o.val(i)):(n=""!==o.val()?Math.round(o.val()*this.hold.xy_ratio):"",a.val(n)),i&&i>this.hold.oh||n&&n>this.hold.ow?s.css("visibility","visible"):s.css("visibility","hidden"))},getSelRatio:function(i){var t=this.hold.w,e=this.hold.h,a=this.intval(g("#imgedit-crop-width-"+i).val()),i=this.intval(g("#imgedit-crop-height-"+i).val());return a&&i?a+":"+i:t&&e?t+":"+e:"1:1"},filterHistory:function(i,t){var e,a,o,s=g("#imgedit-history-"+i).val(),n=[];if(""===s)return"";if(s=JSON.parse(s),0<(e=this.intval(g("#imgedit-undone-"+i).val())))for(;0<e;)s.pop(),e--;if(t){if(!s.length)return this.hold.w=this.hold.ow,this.hold.h=this.hold.oh,"";(t=(t=s[s.length-1]).c||t.r||t.f||!1)&&(this.hold.w=t.fw,this.hold.h=t.fh)}for(a in s)(o=s[a]).hasOwnProperty("c")?n[a]={c:{x:o.c.x,y:o.c.y,w:o.c.w,h:o.c.h}}:o.hasOwnProperty("r")?n[a]={r:o.r.r}:o.hasOwnProperty("f")&&(n[a]={f:o.f.f});return JSON.stringify(n)},refreshEditor:function(o,i,s){var n,t=this;t.toggleEditor(o,1),i={action:"imgedit-preview",_ajax_nonce:i,postid:o,history:t.filterHistory(o,1),rand:t.intval(1e6*Math.random())},n=g('<img id="image-preview-'+o+'" alt="" />').on("load",{history:i.history},function(i){var t,e=g("#imgedit-crop-"+o),a=d;""!==i.data.history&&(t=JSON.parse(i.data.history))[t.length-1].hasOwnProperty("c")&&(a.setDisabled(g("#image-undo-"+o),!0),g("#image-undo-"+o).trigger("focus")),e.empty().append(n),i=Math.max(a.hold.w,a.hold.h),t=Math.max(g(n).width(),g(n).height()),a.hold.sizer=t<i?t/i:1,a.initCrop(o,n,e),null!=s&&s(),g("#imgedit-history-"+o).val()&&"0"===g("#imgedit-undone-"+o).val()?g("input.imgedit-submit-btn","#imgedit-panel-"+o).prop("disabled",!1):g("input.imgedit-submit-btn","#imgedit-panel-"+o).prop("disabled",!0),a.toggleEditor(o,0)}).on("error",function(){var i=r("Could not load the preview image. Please reload the page and try again.");g("#imgedit-crop-"+o).empty().append('<div class="notice notice-error" tabindex="-1" role="alert"><p>'+i+"</p></div>"),t.toggleEditor(o,0,!0),wp.a11y.speak(i,"assertive")}).attr("src",ajaxurl+"?"+g.param(i))},action:function(t,i,e){var a,o,s,n,r=this;if(r.notsaved(t))return!1;if(a={action:"image-editor",_ajax_nonce:i,postid:t},"scale"===e){if(o=g("#imgedit-scale-width-"+t),s=g("#imgedit-scale-height-"+t),n=r.intval(o.val()),i=r.intval(s.val()),n<1)return o.trigger("focus"),!1;if(i<1)return s.trigger("focus"),!1;if(n===r.hold.ow||i===r.hold.oh)return!1;a.do="scale",a.fwidth=n,a.fheight=i}else{if("restore"!==e)return!1;a.do="restore"}r.toggleEditor(t,1),g.post(ajaxurl,a,function(i){g("#image-editor-"+t).empty().append(i.data.html),r.toggleEditor(t,0,!0),r._view&&r._view.refresh()}).done(function(i){i&&i.data.message.msg?wp.a11y.speak(i.data.message.msg):i&&i.data.message.error&&wp.a11y.speak(i.data.message.error)})},save:function(t,i){var e=this.getTarget(t),a=this.filterHistory(t,0),o=this;if(""===a)return!1;this.toggleEditor(t,1),e={action:"image-editor",_ajax_nonce:i,postid:t,history:a,target:e,context:g("#image-edit-context").length?g("#image-edit-context").val():null,do:"save"},g.post(ajaxurl,e,function(i){return i.data.error?(g("#imgedit-response-"+t).html('<div class="notice notice-error" tabindex="-1" role="alert"><p>'+i.data.error+"</p></div>"),d.close(t),void wp.a11y.speak(i.data.error)):(i.data.fw&&i.data.fh&&g("#media-dims-"+t).html(i.data.fw+" &times; "+i.data.fh),i.data.thumbnail&&g(".thumbnail","#thumbnail-head-"+t).attr("src",""+i.data.thumbnail),i.data.msg&&(g("#imgedit-response-"+t).html('<div class="notice notice-success" tabindex="-1" role="alert"><p>'+i.data.msg+"</p></div>"),wp.a11y.speak(i.data.msg)),void(o._view?o._view.save():d.close(t)))})},open:function(e,i,t){this._view=t;var a=g("#image-editor-"+e),o=g("#media-head-"+e),s=g("#imgedit-open-btn-"+e),n=s.siblings(".spinner");if(!s.hasClass("button-activated"))return n.addClass("is-active"),i={action:"image-editor",_ajax_nonce:i,postid:e,do:"open"},g.ajax({url:ajaxurl,type:"post",data:i,beforeSend:function(){s.addClass("button-activated")}}).done(function(i){var t;"-1"===i&&(t=r("Could not load the preview image."),a.html('<div class="notice notice-error" tabindex="-1" role="alert"><p>'+t+"</p></div>")),i.data&&i.data.html&&a.html(i.data.html),o.fadeOut("fast",function(){a.fadeIn("fast",function(){t&&g(document).trigger("image-editor-ui-ready")}),s.removeClass("button-activated"),n.removeClass("is-active")}),d.init(e)})},imgLoaded:function(i){var t=g("#image-preview-"+i),e=g("#imgedit-crop-"+i);void 0===this.hold.sizer&&this.init(i),this.initCrop(i,t,e),this.setCropSelection(i,{x1:0,y1:0,x2:0,y2:0,width:t.innerWidth(),height:t.innerHeight()}),this.toggleEditor(i,0,!0)},focusManager:function(){setTimeout(function(){var i=g('.notice[role="alert"]');(i=!i.length?g(".imgedit-wrap").find(":tabbable:first"):i).trigger("focus")},100)},initCrop:function(a,i,t){var o=this,s=g("#imgedit-sel-width-"+a),n=g("#imgedit-sel-height-"+a),i=g(i);i.data("imgAreaSelect")||(o.iasapi=i.imgAreaSelect({parent:t,instance:!0,handles:!0,keys:!0,minWidth:3,minHeight:3,onInit:function(i){g(i).next().css("position","absolute").nextAll(".imgareaselect-outer").css("position","absolute"),t.children().on("mousedown, touchstart",function(i){var t,e=!1;i.shiftKey&&(t=o.iasapi.getSelection(),i=o.getSelRatio(a),e=t&&t.width&&t.height?t.width+":"+t.height:i),o.iasapi.setOptions({aspectRatio:e})})},onSelectStart:function(){d.setDisabled(g("#imgedit-crop-sel-"+a),1)},onSelectEnd:function(i,t){d.setCropSelection(a,t)},onSelectChange:function(i,t){var e=d.hold.sizer;s.val(d.round(t.width/e)),n.val(d.round(t.height/e))}}))},setCropSelection:function(i,t){if(!(t=t||0)||t.width<3&&t.height<3)return this.setDisabled(g(".imgedit-crop","#imgedit-panel-"+i),1),this.setDisabled(g("#imgedit-crop-sel-"+i),1),g("#imgedit-sel-width-"+i).val(""),g("#imgedit-sel-height-"+i).val(""),g("#imgedit-selection-"+i).val(""),!1;t={x:t.x1,y:t.y1,w:t.width,h:t.height},this.setDisabled(g(".imgedit-crop","#imgedit-panel-"+i),1),g("#imgedit-selection-"+i).val(JSON.stringify(t))},close:function(i,t){if((t=t||!1)&&this.notsaved(i))return!1;this.iasapi={},this.hold={},this._view?this._view.back():g("#image-editor-"+i).fadeOut("fast",function(){g("#media-head-"+i).fadeIn("fast",function(){g("#imgedit-open-btn-"+i).trigger("focus")}),g(this).empty()})},notsaved:function(i){var t=g("#imgedit-history-"+i).val(),t=""!==t?JSON.parse(t):[];return this.intval(g("#imgedit-undone-"+i).val())<t.length&&!confirm(g("#imgedit-leaving-"+i).html())},addStep:function(i,t,e){for(var a=this,o=g("#imgedit-history-"+t),s=""!==o.val()?JSON.parse(o.val()):[],n=g("#imgedit-undone-"+t),r=a.intval(n.val());0<r;)s.pop(),r--;n.val(0),s.push(i),o.val(JSON.stringify(s)),a.refreshEditor(t,e,function(){a.setDisabled(g("#image-undo-"+t),!0),a.setDisabled(g("#image-redo-"+t),!1)})},rotate:function(i,t,e,a){if(g(a).hasClass("disabled"))return!1;this.addStep({r:{r:i,fw:this.hold.h,fh:this.hold.w}},t,e)},flip:function(i,t,e,a){if(g(a).hasClass("disabled"))return!1;this.addStep({f:{f:i,fw:this.hold.w,fh:this.hold.h}},t,e)},crop:function(i,t,e){var a=g("#imgedit-selection-"+i).val(),o=this.intval(g("#imgedit-sel-width-"+i).val()),s=this.intval(g("#imgedit-sel-height-"+i).val());if(g(e).hasClass("disabled")||""===a)return!1;0<(a=JSON.parse(a)).w&&0<a.h&&0<o&&0<s&&(a.fw=o,a.fh=s,this.addStep({c:a},i,t)),g("#imgedit-sel-width-"+i).val(""),g("#imgedit-sel-height-"+i).val("")},undo:function(t,i){var e=this,a=g("#image-undo-"+t),o=g("#imgedit-undone-"+t),s=e.intval(o.val())+1;a.hasClass("disabled")||(o.val(s),e.refreshEditor(t,i,function(){var i=g("#imgedit-history-"+t),i=""!==i.val()?JSON.parse(i.val()):[];e.setDisabled(g("#image-redo-"+t),!0),e.setDisabled(a,s<i.length),i.length===s&&g("#image-redo-"+t).trigger("focus")}))},redo:function(i,t){var e=this,a=g("#image-redo-"+i),o=g("#imgedit-undone-"+i),s=e.intval(o.val())-1;a.hasClass("disabled")||(o.val(s),e.refreshEditor(i,t,function(){e.setDisabled(g("#image-undo-"+i),!0),e.setDisabled(a,0<s),0==s&&g("#image-undo-"+i).trigger("focus")}))},setNumSelection:function(i,t){var e,a=g("#imgedit-sel-width-"+i),o=g("#imgedit-sel-height-"+i),s=this.intval(a.val()),n=this.intval(o.val()),r=g("#image-preview-"+i),d=r.height(),l=r.width(),h=this.hold.sizer,r=this.iasapi;if(!1!==this.validateNumeric(t))return s<1?(a.val(""),!1):n<1?(o.val(""),!1):void(s&&n&&(e=r.getSelection())&&(t=e.x1+Math.round(s*h),s=e.y1+Math.round(n*h),n=e.x1,e=e.y1,l<t&&(n=0,t=l,a.val(Math.round(t/h))),d<s&&(e=0,s=d,o.val(Math.round(s/h))),r.setSelection(n,e,t,s),r.update(),this.setCropSelection(i,r.getSelection())))},round:function(i){var t;return i=Math.round(i),.6<this.hold.sizer?i:"1"===(t=i.toString().slice(-1))?i-1:"9"===t?i+1:i},setRatioSelection:function(i,t,e){var a=this.intval(g("#imgedit-crop-width-"+i).val()),o=this.intval(g("#imgedit-crop-height-"+i).val()),s=g("#image-preview-"+i).height();!1!==this.validateNumeric(e)?a&&o&&(this.iasapi.setOptions({aspectRatio:a+":"+o}),(e=this.iasapi.getSelection(!0))&&(s<(o=Math.ceil(e.y1+(e.x2-e.x1)/(a/o)))&&(o=s,g(t?"#imgedit-crop-height-"+i:"#imgedit-crop-width-"+i).val("")),this.iasapi.setSelection(e.x1,e.y1,e.x2,o),this.iasapi.update())):this.iasapi.setOptions({aspectRatio:null})},validateNumeric:function(i){if(!this.intval(g(i).val()))return g(i).val(""),!1}}}(jQuery);
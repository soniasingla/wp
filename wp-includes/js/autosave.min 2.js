/*! This file is auto-generated */
window.autosave=function(){return!0},function(c,a){function n(){T={post_title:c("#title").val()||"",content:c("#content").val()||"",excerpt:c("#excerpt").val()||""},w=r(T)}function i(t){var e=(new Date).getTime(),n=[],o=u();return o&&o.isDirty()&&!o.isHidden()&&H<e-3e3&&(o.save(),H=e),e={post_id:c("#post_ID").val()||0,post_type:c("#post_type").val()||"",post_author:c("#post_author").val()||"",post_title:c("#title").val()||"",content:c("#content").val()||"",excerpt:c("#excerpt").val()||""},"local"===t||(c('input[id^="in-category-"]:checked').each(function(){n.push(this.value)}),e.catslist=n.join(","),(t=c("#post_name").val())&&(e.post_name=t),(t=c("#parent_id").val())&&(e.parent_id=t),c("#comment_status").prop("checked")&&(e.comment_status="open"),c("#ping_status").prop("checked")&&(e.ping_status="open"),"1"===c("#auto_draft").val()&&(e.auto_draft="1")),e}function r(t){return"object"==typeof t?(t.post_title||"")+"::"+(t.content||"")+"::"+(t.excerpt||""):(c("#title").val()||"")+"::"+(c("#content").val()||"")+"::"+(c("#excerpt").val()||"")}function s(){j.trigger("autosave-disable-buttons"),setTimeout(o,5e3)}function o(){j.trigger("autosave-enable-buttons")}function u(){return"undefined"!=typeof tinymce&&tinymce.get("content")}function p(){_=!0,a.clearTimeout(e),e=a.setTimeout(function(){_=!1},1e4)}function l(){y=(new Date).getTime()+1e3*autosaveL10n.autosaveInterval||6e4}function v(){var t=!1;return t=k&&S?(t=sessionStorage.getItem("wp-autosave-"+S))?JSON.parse(t):{}:t}function d(){var t=v();return t&&D&&t["post_"+D]||!1}function f(t){var e=v();if(!e||!D)return!1;if(t)e["post_"+D]=t;else{if(!e.hasOwnProperty("post_"+D))return!1;delete e["post_"+D]}return t=e,!(!k||!S)&&(e="wp-autosave-"+S,sessionStorage.setItem(e,JSON.stringify(t)),null!==sessionStorage.getItem(e))}function g(t){var e,n;return!(I||!k)&&(t?(e=d()||{},c.extend(e,t)):e=i("local"),(t=r(e))!==(C=void 0===C?w:C)&&(e.save_time=(new Date).getTime(),e.status=c("#post_status").val()||"",(n=f(e))&&(C=t),n))}function m(t,e){function n(t){return t.toString().replace(/[\x20\t\r\n\f]+/g,"")}return n(t||"")===n(e||"")}function t(){var t,e,n,o=d(),a=wpCookies.get("wp-saving-post"),i=c("#has-newer-autosave").parent(".notice"),s=c(".wp-header-end");if(a===D+"-saved")return wpCookies.remove("wp-saving-post"),void f(!1);o&&(t=c("#content").val()||"",e=c("#title").val()||"",a=c("#excerpt").val()||"",m(t,o.content)&&m(e,o.post_title)&&m(a,o.excerpt)||(s.length||(s=c(".wrap h1, .wrap h2").first()),n=c("#local-storage-notice").insertAfter(s).addClass("notice-warning"),i.length?i.slideUp(150,function(){n.slideDown(150)}):n.slideDown(200),n.find(".restore-backup").on("click.autosave-local",function(){var t,e;(t=o)&&(C=r(t),c("#title").val()!==t.post_title&&c("#title").trigger("focus").val(t.post_title||""),c("#excerpt").val(t.excerpt||""),(e=u())&&!e.isHidden()&&"undefined"!=typeof switchEditors?(e.settings.wpautop&&t.content&&(t.content=switchEditors.wpautop(t.content)),e.undoManager.transact(function(){e.setContent(t.content||""),e.nodeChanged()})):(c("#content-html").trigger("click"),c("#content").trigger("focus"),document.execCommand("selectAll"),document.execCommand("insertText",!1,t.content||""))),n.fadeTo(250,0,function(){n.slideUp(150)})})))}var w,_,e,h,x,y,b,S,D,k,C,I,T,H,j;a.wp=a.wp||{},a.wp.autosave=(T={},H=0,(j=c(document)).on("tinymce-editor-init.autosave",function(t,e){"content"!==e.id&&"excerpt"!==e.id||a.setTimeout(function(){e.save(),n()},1e3)}).ready(function(){n()}),{getPostData:i,getCompareString:r,disableButtons:s,enableButtons:o,local:(I=!1,S=void 0!==a.autosaveL10n&&a.autosaveL10n.blog_id,function(){var t=Math.random().toString(),e=!1;try{a.sessionStorage.setItem("wp-test",t),e=a.sessionStorage.getItem("wp-test")===t,a.sessionStorage.removeItem("wp-test")}catch(t){}return k=e}()&&S&&(c("#content").length||c("#excerpt").length)&&j.ready(function(){D=c("#post_ID").val()||0,c("#wp-content-wrap").hasClass("tmce-active")?j.on("tinymce-editor-init.autosave",function(){a.setTimeout(function(){t()},1500)}):t(),a.setInterval(g,15e3),c("form#post").on("submit.autosave-local",function(){var t=u(),e=c("#post_ID").val()||0;t&&!t.isHidden()?t.on("submit",function(){g({post_title:c("#title").val()||"",content:c("#content").val()||"",excerpt:c("#excerpt").val()||""})}):g({post_title:c("#title").val()||"",content:c("#content").val()||"",excerpt:c("#excerpt").val()||""});t="https:"===a.location.protocol;wpCookies.set("wp-saving-post",e+"-check",86400,!1,!1,t)})}),{hasStorage:k,getSavedPostData:d,save:g,suspend:function(){I=!0},resume:function(){I=!1}}),server:(y=0,b=!1,j.on("heartbeat-send.autosave",function(t,e){var n,o,n=!(b||_||!a.autosave())&&(!((new Date).getTime()<y)&&((o=r(n=i()))!==(x=void 0===x?w:x)&&(h=o,p(),s(),j.trigger("wpcountwords",[n.content]).trigger("before-autosave",[n]),n._wpnonce=c("#_wpnonce").val()||"",n)));n&&(e.wp_autosave=n)}).on("heartbeat-tick.autosave",function(t,e){e.wp_autosave&&(e=e.wp_autosave,l(),_=!1,x=h,h="",j.trigger("after-autosave",[e]),o(),e.success&&c("#auto_draft").val(""))}).on("heartbeat-connection-lost.autosave",function(t,e,n){"timeout"!==e&&603!==n||(n=c("#lost-connection-notice"),wp.autosave.local.hasStorage||n.find(".hide-if-no-sessionstorage").hide(),n.show(),s())}).on("heartbeat-connection-restored.autosave",function(){c("#lost-connection-notice").hide(),o()}).ready(function(){l()}),{tempBlockSave:p,triggerSave:function(){y=0,wp.heartbeat.connectNow()},postChanged:function(){var n=!1;return a.tinymce?(a.tinymce.each(["content","excerpt"],function(t){var e=a.tinymce.get(t);if(!e||e.isHidden()){if((c("#"+t).val()||"")!==T[t])return!(n=!0)}else if(e.isDirty())return!(n=!0)}),n=(c("#title").val()||"")!==T.post_title?!0:n):r()!==w},suspend:function(){b=!0},resume:function(){b=!1}})})}(jQuery,window);
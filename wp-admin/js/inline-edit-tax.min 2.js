/*! This file is auto-generated */
window.wp=window.wp||{},function(s,l){window.inlineEditTax={init:function(){var t=this,e=s("#inline-edit");t.type=s("#the-list").attr("data-wp-lists").substr(5),t.what="#"+t.type+"-",s("#the-list").on("click",".editinline",function(){s(this).attr("aria-expanded","true"),inlineEditTax.edit(this)}),e.on("keyup",function(t){if(27===t.which)return inlineEditTax.revert()}),s(".cancel",e).on("click",function(){return inlineEditTax.revert()}),s(".save",e).on("click",function(){return inlineEditTax.save(this)}),s("input, select",e).on("keydown",function(t){if(13===t.which)return inlineEditTax.save(this)}),s('#posts-filter input[type="submit"]').on("mousedown",function(){t.revert()})},toggle:function(t){var e=this;"none"===s(e.what+e.getId(t)).css("display")?e.revert():e.edit(t)},edit:function(t){var e,i,n=this;return n.revert(),"object"==typeof t&&(t=n.getId(t)),e=s("#inline-edit").clone(!0),i=s("#inline_"+t),s("td",e).attr("colspan",s("th:visible, td:visible",".wp-list-table.widefat:first thead").length),s(n.what+t).hide().after(e).after('<tr class="hidden"></tr>'),(n=s(".name",i)).find("img").replaceWith(function(){return this.alt}),n=n.text(),s(':input[name="name"]',e).val(n),(n=s(".slug",i)).find("img").replaceWith(function(){return this.alt}),n=n.text(),s(':input[name="slug"]',e).val(n),s(e).attr("id","edit-"+t).addClass("inline-editor").show(),s(".ptitle",e).eq(0).trigger("focus"),!1},save:function(d){var t=s('input[name="taxonomy"]').val()||"";return"object"==typeof d&&(d=this.getId(d)),s("table.widefat .spinner").addClass("is-active"),t={action:"inline-save-tax",tax_type:this.type,tax_ID:d,taxonomy:t},t=s("#edit-"+d).find(":input").serialize()+"&"+s.param(t),s.post(ajaxurl,t,function(t){var e,i,n,a=s("#edit-"+d+" .inline-edit-save .notice-error"),r=a.find(".error");s("table.widefat .spinner").removeClass("is-active"),t?-1!==t.indexOf("<tr")?(s(inlineEditTax.what+d).siblings("tr.hidden").addBack().remove(),i=s(t).attr("id"),s("#edit-"+d).before(t).remove(),e=i?(n=i.replace(inlineEditTax.type+"-",""),s("#"+i)):(n=d,s(inlineEditTax.what+d)),s("#parent").find("option[value="+n+"]").text(e.find(".row-title").text()),e.hide().fadeIn(400,function(){e.find(".editinline").attr("aria-expanded","false").trigger("focus"),l.a11y.speak(l.i18n.__("Changes saved."))})):(a.removeClass("hidden"),r.html(t),l.a11y.speak(r.text())):(a.removeClass("hidden"),r.text(l.i18n.__("Error while saving the changes.")),l.a11y.speak(l.i18n.__("Error while saving the changes.")))}),!1},revert:function(){var t=s("table.widefat tr.inline-editor").attr("id");t&&(s("table.widefat .spinner").removeClass("is-active"),s("#"+t).siblings("tr.hidden").addBack().remove(),t=t.substr(t.lastIndexOf("-")+1),s(this.what+t).show().find(".editinline").attr("aria-expanded","false").trigger("focus"))},getId:function(t){t=("TR"===t.tagName?t.id:s(t).parents("tr").attr("id")).split("-");return t[t.length-1]}},s(document).ready(function(){inlineEditTax.init()})}(jQuery,window.wp);
/*! This file is auto-generated */
!function(e){e(document).ready(function(){var c,a=e("#custom-background-image");e("#background-color").wpColorPicker({change:function(n,o){a.css("background-color",o.color.toString())},clear:function(){a.css("background-color","")}}),e('select[name="background-size"]').on("change",function(){a.css("background-size",e(this).val())}),e('input[name="background-position"]').on("change",function(){a.css("background-position",e(this).val())}),e('input[name="background-repeat"]').on("change",function(){a.css("background-repeat",e(this).is(":checked")?"repeat":"no-repeat")}),e('input[name="background-attachment"]').on("change",function(){a.css("background-attachment",e(this).is(":checked")?"scroll":"fixed")}),e("#choose-from-library-link").on("click",function(n){var o=e(this);n.preventDefault(),c||(c=wp.media.frames.customBackground=wp.media({title:o.data("choose"),library:{type:"image"},button:{text:o.data("update"),close:!1}})).on("select",function(){var n=c.state().get("selection").first(),o=e("#_wpnonce").val()||"";e.post(ajaxurl,{action:"set-background-image",attachment_id:n.id,_ajax_nonce:o,size:"full"}).done(function(){window.location.reload()})}),c.open()})})}(jQuery);
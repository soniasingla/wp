/*! This file is auto-generated */
!function(t,p){var s=t("#app_name"),r=t("#approve"),e=t("#reject"),n=s.closest("form"),i={userLogin:p.user_login,successUrl:p.success,rejectUrl:p.reject};r.on("click",function(e){var a=s.val(),o=t('input[name="app_id"]',n).val();e.preventDefault(),r.prop("aria-disabled")||(0!==a.length?(r.prop("aria-disabled",!0).addClass("disabled"),a={name:a},0<o.length&&(a.app_id=o),a=wp.hooks.applyFilters("wp_application_passwords_approve_app_request",a,i),wp.apiRequest({path:"/wp/v2/users/me/application-passwords?_locale=user",method:"POST",data:a}).done(function(e,a,o){wp.hooks.doAction("wp_application_passwords_approve_app_request_success",e,a,o);var s,o=p.success;o?(s=o+(-1===o.indexOf("?")?"?":"&")+"site_url="+encodeURIComponent(p.site_url)+"&user_login="+encodeURIComponent(p.user_login)+"&password="+encodeURIComponent(e.password),window.location=s):(s=wp.i18n.sprintf('<label for="new-application-password-value">'+wp.i18n.__("Your new password for %s is:")+"</label>","<strong></strong>")+' <input id="new-application-password-value" type="text" class="code" readonly="readonly" value="" />',s=t("<div></div>").attr("role","alert").attr("tabindex",-1).addClass("notice notice-success notice-alt").append(t("<p></p>").addClass("application-password-display").html(s)).append("<p>"+wp.i18n.__("Be sure to save this in a safe location. You will not be able to retrieve it.")+"</p>"),t("strong",s).text(e.name),t("input",s).val(e.password),n.replaceWith(s),s.trigger("focus"))}).fail(function(e,a,o){var s=o,p=null;e.responseJSON&&(p=e.responseJSON).message&&(s=p.message);s=t("<div></div>").attr("role","alert").addClass("notice notice-error").append(t("<p></p>").text(s));t("h1").after(s),r.removeProp("aria-disabled",!1).removeClass("disabled"),wp.hooks.doAction("wp_application_passwords_approve_app_request_error",p,a,o,e)})):s.trigger("focus"))}),e.on("click",function(e){e.preventDefault(),wp.hooks.doAction("wp_application_passwords_reject_app",i),window.location=p.reject}),n.on("submit",function(e){e.preventDefault()})}(jQuery,authApp);
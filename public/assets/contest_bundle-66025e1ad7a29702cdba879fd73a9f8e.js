(function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};quanto.ContestManager=t=function(){function t(){this.setup_nav=e(this.setup_nav,this),this.toggle_see_more_panel=e(this.toggle_see_more_panel,this);var t,a,n,o;n=40,t=1050,$(".quanto-scroll-nav").affix({offset:{top:$(".criteria-pane").offset().top+n,bottom:$(document).height()-$(".criteria-pane").offset().top+t}}),quanto.on_click(".evaluating-algo-more",function(t){return function(){return t.toggle_see_more_panel(),t.setup_nav()}}(this)),o=window.location.href,a=o.split("#")[1],o.indexOf("#"+a)>-1&&(this.toggle_see_more_panel(),$("html,body").animate({scrollTop:$("#"+a).offset().top-55},"slow"),this.setup_nav())}return t.prototype.toggle_see_more_panel=function(){return $(".evaluating-algo-details-pane").toggleClass("hidden"),$(".evaluating-algo-details-toc").removeClass("freeze-bottom"),"More"===$(".eval-toggle").html()?$(".eval-toggle").html("Less"):$(".eval-toggle").html("More")},t.prototype.setup_nav=function(){return $("body").scrollspy({target:".quanto-scroll-nav",offset:63}),$(".algo-details-nav > li").click(function(){var t;return t=60,$("html, body").animate({scrollTop:$($(this).find("a").attr("href")).offset().top-t},"slow"),!1})},t}()}).call(this),function(){var t,e=function(t,e){return function(){return t.apply(e,arguments)}};quanto.LeaderboardManager=t=function(){function t(t){this.initialize_leaderboard_table=e(this.initialize_leaderboard_table,this),this.initialize_user_table=e(this.initialize_user_table,this),this.initialize_user_table(t),this.initialize_leaderboard_table(t),$(".dropdown-menu-option").on("click",function(t){var e,a;return e=$(quanto.get_src_element(t)),a=e.data("toggleName"),$(".dropdown-button span").html(a)}),$("body").on("touchstart.dropdown",".dropdown-menu",function(t){t.stopPropagation()}),quanto.on_click(".close-button",function(){return function(){return $(".contest-information-banner").hide()}}(this))}return t.prototype.initialize_user_table=function(t){var e;return e=$("#user-table").DataTable({info:!1,iDisplayLength:50,bLengthChange:!1,filter:!1,bPaginate:!1,oLanguage:{sEmptyTable:"Loading..."},aoColumnDefs:[{bSortable:!1,aTargets:["_all"]}]}),$("#user-table").css("visibility","visible"),$(document).on("click","#user-table tbody tr",function(e){var a;return quanto.is_mobile_screen()&&$(quanto.get_src_element(e)).hasClass("beta-badge")||(a=$(this).data("submission_id"),null==a)?void 0:window.location="/leaderboard/"+t+"/"+a})},t.prototype.initialize_leaderboard_table=function(t){var e;return e=$("#leaderboard-table").DataTable({info:!1,iDisplayLength:50,bLengthChange:!1,filter:!1,oLanguage:{sEmptyTable:"Loading..."},aoColumnDefs:[{bSortable:!1,aTargets:["_all"]}],pagingType:"simple_numbers",fnDrawCallback:function(t){var e,a;return t._iDisplayStart!==e?(a=$("body").offset().top,$("html,body").animate({scrollTop:a},0),e=t._iDisplayStart):void 0}}),$("#leaderboard-table").css("visibility","visible"),$(document).on("click","#leaderboard-table tbody tr",function(e){var a;return quanto.is_mobile_screen()&&$(quanto.get_src_element(e)).hasClass("beta-badge")||(a=$(this).data("submission_id"),null==a)?void 0:window.location="/leaderboard/"+t+"/"+a})},t}()}.call(this),function(){var t;quanto.LeaderboardLandingManager=t=function(){function t(){quanto.on_click(".archives-link",function(){return function(){return $(".old-leaderboards").toggleClass("hidden"),"Show old leaderboards"===$(".archives-link").html()?$(".archives-link").html("Hide old leaderboards"):$(".archives-link").html("Show old leaderboards")}}(this))}return t}()}.call(this);
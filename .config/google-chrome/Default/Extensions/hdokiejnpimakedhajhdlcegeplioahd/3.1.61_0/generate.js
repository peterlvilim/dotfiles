function oninitgenerate(){}
function onshowgenerate(){var a=getBG();document.getElementById("advanced")&&(document.getElementById("advanced").checked=parseInt(a.lpGetPref("generate_advanced",0)));document.getElementById("length").value=parseInt(a.lpGetPref("generate_length",12));document.getElementById("upper").checked=parseInt(a.lpGetPref("generate_upper",1));document.getElementById("lower").checked=parseInt(a.lpGetPref("generate_lower",1));document.getElementById("digits").checked=parseInt(a.lpGetPref("generate_digits",1));
document.getElementById("special").checked=parseInt(a.lpGetPref("generate_special",0));document.getElementById("mindigits").value=parseInt(a.lpGetPref("generate_mindigits",1));document.getElementById("ambig").checked=parseInt(a.lpGetPref("generate_ambig",0));document.getElementById("reqevery").checked=parseInt(a.lpGetPref("generate_reqevery",1));document.getElementById("pronounceable").checked=parseInt(a.lpGetPref("generate_pronounceable",0));document.getElementById("advanced")&&0==document.getElementById("advanced").checked&&
(document.getElementById("advancedoptions").style.display="none");pwUpkeep();dogenerate();a.g_checkgeneratepasswordcallback=function(){g_generate_found=!0;sr(document,"generatesave","value","Accept");document.getElementById("_docwrite_popover18")&&(document.getElementById("_docwrite_popover18").innerHTML=gs("Accept"));sr(document,"generateclose","value","Cancel")};if(g_ischrome)a.get_selected_tab(null,function(b){""==g_generate_url&&(g_generate_url=a.gettaburl(b),fix_length(document));g_tabid||(g_tabid=
b.id);a.sendCS(g_tabid,{cmd:"checkgeneratepassword"})});else if(g_issafari||g_isopera||g_ismaxthon)g_isopera||g_ismaxthon?(g_generate_url=a.g_generate_url,""==g_generate_url&&(g_generate_url=a.g_generate_url_prev),fix_length(document),!g_tabid&&a.g_tabid&&(g_tabid=a.g_tabid)):g_issafari&&"undefined"==typeof g_generate_url&&(g_generate_url=a.getcurrenturl(),fix_length(document),g_tabid=a.getcurrenttabid()),a.checkgeneratepassword(g_tabid);fix_length(document)}
function onhidegenerate(){var a=getBG();document.getElementById("advanced")&&a.lpPutUserPref("generate_advanced",document.getElementById("advanced").checked?1:0);a.lpPutUserPref("generate_length",document.getElementById("length").value);a.lpPutUserPref("generate_upper",document.getElementById("upper").checked?1:0);a.lpPutUserPref("generate_lower",document.getElementById("lower").checked?1:0);a.lpPutUserPref("generate_digits",document.getElementById("digits").checked?1:0);a.lpPutUserPref("generate_special",
document.getElementById("special").checked?1:0);a.lpPutUserPref("generate_mindigits",document.getElementById("mindigits").value);a.lpPutUserPref("generate_ambig",document.getElementById("ambig").checked?1:0);a.lpPutUserPref("generate_reqevery",document.getElementById("reqevery").checked?1:0);a.lpPutUserPref("generate_pronounceable",document.getElementById("pronounceable").checked?1:0);a.lpWriteAllPrefs();(g_issafari||g_isopera||g_ismaxthon)&&a.update_prefs("generate")}
function fix_length(a,b){"undefined"!=typeof g_isie&&g_isie&&(g_generate_url=ie_gettopurl());if("string"==typeof g_generate_url&&""!=g_generate_url){var d="undefined"!=typeof g_isie&&g_isie?get_sitepwlen(lp_gettld_url(g_generate_url)):getBG().get_sitepwlen(lp_gettld_url(g_generate_url));d>a.getElementById("length").value&&(a.getElementById("length").value=d,b||dogenerate())}else"undefined"!=typeof g_sitepwlen_override&&(g_sitepwlen_override>a.getElementById("length").value&&(a.getElementById("length").value=
g_sitepwlen_override),b||dogenerate())}
function dogenerate(){fix_length(document,!0);var a=document.getElementById("length").value;100<a&&(a=document.getElementById("length").value=100);var b=document.getElementById("upper").checked,d=document.getElementById("lower").checked,g=document.getElementById("digits").checked,h=document.getElementById("special").checked,f=document.getElementById("mindigits").value,k=document.getElementById("ambig").checked,c=document.getElementById("reqevery").checked,e=document.getElementById("pronounceable").checked;
document.getElementById("password").style.fontFamily="courier";document.getElementById("password").value=lpCreatePass(a,b,d,g,h,f,k,c,e);getBG().g_genpws.unshift(document.getElementById("password").value);20<getBG().g_genpws.length&&getBG().g_genpws.splice(20,getBG().g_genpws.length-20);repopulate_combo("password",getBG().g_genpws);document.getElementById("page_passwordmeterback")&&update_password_meter("",document.getElementById("password").value)}
function dosave(a){var b=getBG(),d=document.getElementById("password").value;"undefined"==typeof g_generate_found&&(g_generate_found=!1);g_generate_found||("function"==typeof b.copytoclipboard?b.copytoclipboard(d):Clipboard.copy(d));""==g_generate_url&&(g_generate_url=b.getcurrenturl());b.savePassword(d,g_generate_url,g_tabid,!g_generate_found);a?setTimeout(function(){getBG().closePop()},0):g_issafari?closemole():"undefined"!=typeof g_ismenu&&g_ismenu?setTimeout(function(){window.close()},0):setTimeout(function(){getBG().closecurrenttab("")},
0)}
function lpCreatePass(a,b,d,g,h,f,k,c,e){"undefined"==typeof a&&(a=8+get_random(0,1));"undefined"==typeof b&&(b=!0);"undefined"==typeof d&&(d=!0);"undefined"==typeof g&&(g=!0);"undefined"==typeof h&&(h=!1);"undefined"==typeof f&&(f=0);"undefined"==typeof k&&(k=!1);"undefined"==typeof c&&(c=!0);if(e)return GPW.pronounceable(a);var j=0,m=0,n=0;c&&(j=m=n=1);c=[];if(d&&0<j)for(e=0;e<j;e++)c[c.length]="L";if(b&&0<m)for(e=0;e<m;e++)c[c.length]="U";if(g&&0<f)for(e=0;e<f;e++)c[c.length]="D";if(h&&0<n)for(e=0;e<
n;e++)c[c.length]="S";for(;c.length<a;)c[c.length]="A";c.sort(function(){return 2*get_random(0,1)-1});f="";j="abcdefghjkmnpqrstuvwxyz";k||(j+="ilo");d&&(f+=j);d="ABCDEFGHJKMNPQRSTUVWXYZ";k||(d+="ILO");b&&(f+=d);b="23456789";k||(b+="10");g&&(f+=b);h&&(f+="!@#$%^&*");g="";for(h=0;h<a;h++){var l;switch(c[h]){case "L":l=j;break;case "U":l=d;break;case "D":l=b;break;case "S":l="!@#$%^&*";break;case "A":l=f}e=get_random(0,l.length-1);g+=l.charAt(e)}return g}
function showhideadv(){var a=document.getElementById("advancedoptions");a.style.display="none"==a.style.display?"block":"none"};

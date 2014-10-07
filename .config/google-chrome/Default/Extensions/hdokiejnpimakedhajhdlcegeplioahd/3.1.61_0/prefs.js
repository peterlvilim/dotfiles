function lpPutUserPref(b,d){"undefined"==typeof g_userprefs&&(g_userprefs=getBG().g_userprefs);g_userprefs[b]=d}function lpPutGblPref(b,d){"undefined"==typeof g_gblprefs&&(g_gblprefs=getBG().g_gblprefs);g_gblprefs[b]=d}
function lpGetPref(b,d){"undefined"==typeof g_userprefs&&(g_userprefs=getBG().g_userprefs);if("undefined"!=typeof g_userprefs&&"undefined"!=typeof g_userprefs[b])return g_userprefs[b];"undefined"==typeof g_gblprefs&&(g_gblprefs=getBG().g_gblprefs);return"undefined"!=typeof g_gblprefs&&"undefined"!=typeof g_gblprefs[b]?g_gblprefs[b]:d}
function lpReadAllPrefs(b){var d=g_username_hash&&""!=g_username_hash?g_username_hash:"";g_userprefs=[];g_identity="";var c=opendb();createPrefsTable(c);c?c.transaction(function(a){a.executeSql("SELECT * FROM LastPassPreferences where username_hash=? or username_hash=?",[d,""],function(a,d){g_gblprefs=[];for(var c=0;c<d.rows.length;c++){var g=d.rows.item(c).username_hash,h=d.rows.item(c).prefname,j=d.rows.item(c).prefvalue;""!=g?"language"!=h&&(g_userprefs[h]=j,"identity"==h&&(g_identity=j)):g_gblprefs[h]=
j}if(g_issafari||g_isopera||g_ismaxthon)c=lpGetPref("language",""),include_language(c);start_idle_checker();"undefined"==typeof g_gblprefs.generateHkKeyCode&&setup_default_hotkeys();if("undefined"!=typeof g_gblprefs.server&&(c=g_gblprefs.server,""!=c&&("lastpass.com"==c||"lastpass.eu"==c)))(0==base_url.indexOf("https://rodan.lastpass.com")||0==base_url.indexOf("https://dev.lastpass.com"))&&"lastpass.com"==c||(base_url="https://"+c+"/");g_prefs_read=!0;console_log("read: "+d.rows.length+" preferences");
b&&b(d.rows.length)},function(a,b){console_log(b)})}):b&&b()}
function setup_default_hotkeys(){g_is_mac?(lpPutGblPref("generateHkKeyCode",0),lpPutGblPref("generateHkMods",""),lpPutGblPref("recheckHkKeyCode",0),lpPutGblPref("recheckHkMods",""),lpPutGblPref("searchHkKeyCode",0),lpPutGblPref("searchHkMods",""),lpPutGblPref("nextHkKeyCode",33),lpPutGblPref("nextHkMods","meta"),lpPutGblPref("prevHkKeyCode",34),lpPutGblPref("prevHkMods","meta"),lpPutGblPref("homeHkKeyCode",0),lpPutGblPref("homeHkMods",""),lpPutGblPref("popoverHkKeyCode",220),lpPutGblPref("popoverHkMods",
"meta")):(lpPutGblPref("generateHkKeyCode",71),lpPutGblPref("generateHkMods","alt"),lpPutGblPref("recheckHkKeyCode",73),lpPutGblPref("recheckHkMods","alt"),lpPutGblPref("searchHkKeyCode",87),lpPutGblPref("searchHkMods","alt"),lpPutGblPref("nextHkKeyCode",33),lpPutGblPref("nextHkMods","alt"),lpPutGblPref("prevHkKeyCode",34),lpPutGblPref("prevHkMods","alt"),lpPutGblPref("homeHkKeyCode",72),lpPutGblPref("homeHkMods","control alt"),lpPutGblPref("popoverHkKeyCode",220),lpPutGblPref("popoverHkMods","alt"));
lpPutGblPref("submitHkKeyCode",0);lpPutGblPref("submitHkMods","");lpPutGblPref("saveallHkKeyCode",0);lpPutGblPref("saveallHkMods","");lpPutGblPref("logoffHkKeyCode",0);lpPutGblPref("logoffHkMods","");lpWriteAllPrefs()}
function lpWriteAllPrefs(){var b=opendb();createPrefsTable(b);b&&b.transaction(function(b){if(null!=g_username_hash&&""!=g_username_hash)for(var c in g_userprefs)b.executeSql("REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES (?, ?, ?)",[g_username_hash,c,g_userprefs[c]],function(){},function(a,b){console_log(b)});for(c in g_gblprefs)b.executeSql("REPLACE INTO LastPassPreferences (username_hash, prefname, prefvalue) VALUES (?, ?, ?)",["",c,g_gblprefs[c]],function(){},function(a,
b){console_log(b)})})}optionsData=[];optionsData.HotKeys=[];
function capturehk(b,d){var c;c=""+(d.ctrlKey?"control":"");c+=d.metaKey?(""!=c?" ":"")+"meta":"";c+=d.altKey?(""!=c?" ":"")+"alt":"";c+=d.shiftKey?(""!=c?" ":"")+"shift":"";if(""==c||"shift"==c)c=getBG().g_is_mac?"meta":"alt";if(8==d.keyCode||127==d.keyCode||46==d.keyCode)optionsData.HotKeys[b+"KeyCode"]=0;else{if(32>=d.keyCode||91==d.keyCode)return;optionsData.HotKeys[b+"KeyCode"]=0!=d.keyCode?d.keyCode:d.charCode}optionsData.HotKeys[b+"Mods"]=c;writeHotKeyValue(b)}
function writeHotKeyValue(b){var d=optionsData.HotKeys[b+"KeyCode"],c=document.getElementById(b),a="";if(0!=d){b=optionsData.HotKeys[b+"Mods"];"string"!=typeof b&&(b="");b=b.split(" ");for(var e in b)"control"==b[e]&&(a+=gs("Ctrl")+"+"),"meta"==b[e]&&(a+=gs("Meta")+"+"),"alt"==b[e]&&(a+=gs("Alt")+"+"),"shift"==b[e]&&(a+=gs("Shift")+"+")}if(0!=d){d=parseInt(d);switch(d){case 33:a+=gs("Page Up");break;case 34:a+=gs("Page Down");break;case 35:a+=gs("End");break;case 36:a+=gs("Home");break;case 37:a+=
gs("Left");break;case 38:a+=gs("Up");break;case 39:a+=gs("Right");break;case 40:a+=gs("Down");break;case 189:a+="-";break;case 219:a+="[";break;case 220:a+="\\";break;case 221:a+="]";break;case 186:a+=";";break;case 222:a+="'";break;case 188:a+=",";break;case 187:a+="+";break;case 190:a+=".";break;case 191:a+="/";break;case 106:a+="*";break;case 192:a+="~";break;case 124:a+=gs("Print Screen");break;default:a+=String.fromCharCode(d).toUpperCase()}c.value=a}else c.value=""}
function fixhk(b,d){32>optionsData.HotKeys[b+"KeyCode"]&&(optionsData.HotKeys[b+"Mods"]="",writeHotKeyValue(b));d.cancelBubble=!0;d.stopPropagation()}var last_idle_check=0,idle_checker_started=!1;
function start_idle_checker(){if(0==last_idle_check&&!idle_checker_started){var b=parseInt(lpGetPref("idleLogoffVal",0));lpdbg("idle","starting idle checker, idleLogoffVal is "+lpGetPref("idleLogoffVal",0));0<b&&(last_idle_check=lp_get_gmt_timestamp(),idle_checker_started=!0,setTimeout(function(){idle_checker()},1E4))}}var last_active_time=0,enable_native_idle=!0;
function idle_checker(){var b=parseInt(lpGetPref("idleLogoffVal",0));lpdbg("idle","checking idle, idleLogoffVal is "+lpGetPref("idleLogoffVal",0));if(0<b){var d=60*b,c=function(a){var c=!1,f=lp_get_gmt_timestamp();"active"==a?last_active_time=lp_get_gmt_timestamp():"locked"==a?c=d<f-last_active_time:"idle"==a&&(c=!0);var g=!0;if(0!=last_idle_check&&0!=d&&(c||d<f-last_idle_check))console_log("IDLE CHECKER ISSUING LOGOFF: idleLogoffVal="+b+" isidle="+c+" limit="+d+" currtime="+f+" last_idle_check="+
last_idle_check+" state="+a+" last_active_time="+last_active_time),lplogoff_if(),g=!1;g&&(last_idle_check=f)},a=function(a){a?call_binary_function("get_idle_ms",function(a){a=parseInt(a/1E3);c(d<a?"idle":"active")}):enable_native_idle&&("undefined"!=typeof chrome&&"undefined"!=typeof chrome.idle)&&chrome.idle.queryState(d,c)};have_binary_function("get_idle_ms")?can_check_idle(a):a(!1)}setTimeout(function(){idle_checker()},1E4)}var g_can_check_idle=-1;
function can_check_idle(b){-1!=g_can_check_idle?b(g_can_check_idle?!0:!1):!g_is_linux||!have_binary_function("can_check_idle")?(g_can_check_idle=1,b(!0)):call_binary_function("can_check_idle",function(d){g_can_check_idle=d?1:0;b(g_can_check_idle?!0:!1)})};

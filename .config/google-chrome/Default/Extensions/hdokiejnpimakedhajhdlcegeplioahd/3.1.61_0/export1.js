document.title=gs("Export");function doexport(a){a?(a=document.createElement("pre"),a.innerHTML=getBG().g_export_output,getBG().g_export_output="",document.body.appendChild(a)):get_data("export",function(){doexport(!0)})}document.addEventListener("DOMContentLoaded",function(){window.addEventListener("load",function(){doexport()})});

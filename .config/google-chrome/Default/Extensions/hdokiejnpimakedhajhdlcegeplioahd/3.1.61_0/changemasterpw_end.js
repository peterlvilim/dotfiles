document.title=gs("Change Password");document.getElementById("_docwrite_changemasterpw1")&&(document.getElementById("_docwrite_changemasterpw1").innerHTML=gs("Change Password"));document.getElementById("_docwrite_changemasterpw2")&&(document.getElementById("_docwrite_changemasterpw2").innerHTML=gs("Email"));document.getElementById("_docwrite_changemasterpw3")&&(document.getElementById("_docwrite_changemasterpw3").innerHTML=gs("Old Password"));
document.getElementById("_docwrite_changemasterpw4")&&(document.getElementById("_docwrite_changemasterpw4").innerHTML=gs("New Master Password"));document.getElementById("_docwrite_changemasterpw6")&&(document.getElementById("_docwrite_changemasterpw6").innerHTML=gs("Confirm Password"));
document.addEventListener("DOMContentLoaded",function(){document.getElementById("lpform").onsubmit=function(){return!1};document.getElementById("origmasterpassword").addEventListener("keyup",function(){update_password_meter(g_username,document.getElementById("masterpassword").value)});document.getElementById("masterpassword").addEventListener("keyup",function(){update_password_meter(g_username,document.getElementById("masterpassword").value)});document.getElementById("changeyourpassword").addEventListener("click",
function(){do_submit()});document.getElementById("nothanks").addEventListener("click",function(){getBG().closecurrenttab("changemasterpw.html")})});

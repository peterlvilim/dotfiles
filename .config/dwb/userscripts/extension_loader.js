//<pwdhash___SCRIPT
extensions.load("pwdhash", {
//<pwdhash___CONFIG
  // Assume that the same password is used on all sites and ask only once for the
  // password
  keepPassword : false,

  // Key that inserts the password in an focused password field, 
  // default is F2. The password is also inserted into the password field if '@@'
  // is entered in the passsword field.
  keyCode : 68, 

  // Ask for a password and insert it into a focused password field, this
  // function always asks for a password, even if keepPassword is set to true,
  // default is F3. The password is also inserted into the password field if '!!'
  // is entered in the passsword field.
  keyCodeNewPwd : 69
  
//>pwdhash___CONFIG
});
//>pwdhash___SCRIPT
//<adblock_subscriptions___SCRIPT
extensions.load("adblock_subscriptions", {
//<adblock_subscriptions___CONFIG

// Shortcut to subscribe to a filterlist
scSubscribe : null, 
// Command to subscribe to a filterlist
cmdSubscribe : "adblock_subscribe", 

// Shortcut to unsubscribe from a filterlist
scUnsubscribe : null, 

// Command to unsubscribe from a filterlist
cmdUnsubscribe : "adblock_unsubscribe",

// Shortcut to update subscriptions and reload filter rules
// Note that dwb will also update all subscriptions on startup
scUpdate : null, 

// Command to update subscriptions and reload filter rules
// Note that dwb will also update all subscriptions on startup
cmdUpdate : "adblock_update", 

// Path to the filterlist directory, will be created if it doesn't exist. 
filterListDir : data.configDir + "/adblock_lists"
//>adblock_subscriptions___CONFIG
});
//>adblock_subscriptions___SCRIPT
//<userscripts___SCRIPT
extensions.load("userscripts", {
//<userscripts___CONFIG
  // paths to userscripts, this extension will also load all scripts in 
  // $XDG_CONFIG_HOME/dwb/greasemonkey, it will also load all scripts in
  // $XDG_CONFIG_HOME/dwb/scripts but this is deprecated and will be
  // disabled in future versions.
  scripts : []
//>userscripts___CONFIG
});
//>userscripts___SCRIPT
//<contenthandler___SCRIPT
extensions.load("contenthandler", {
//<contenthandler___CONFIG
  // The handler can either be a string or a function, if it is a string
  // %u will be replaced with the uri of the request, if the handler is a
  // function the first parameter of the function will be the uri and the
  // function must return the command to execute.
  
  // Handle requests based on filename extension
  extension : {
    // "torrent" : "xterm -e 'aria2 %u'", 
    // "pdf" : "xterm -e 'wget %u --directory-prefix=~/mypdfs'"
     "pdf" : "xterm -e 'wget -q -O - %u | zathura -'"
  },

  // Handle requests based on URI scheme
  uriScheme : {
      //ftp : function(uri) { 
      //    if (uri[uri.length-1] == "/") 
      //        return "xterm -e 'ncftp " + uri + "'"; 
      //    else 
      //        return "xterm -e 'ncftpget " + uri + "'"; 
      //}
  },

  // Handle requests based on MIME type
  mimeType : {
    // "application/pdf" : "xterm -e 'wget %u --directory-prefix=~/mypdfs'"
  }
//>contenthandler___CONFIG
});
//>contenthandler___SCRIPT
//<cookies___SCRIPT
extensions.load("cookies");
//>cookies___SCRIPT

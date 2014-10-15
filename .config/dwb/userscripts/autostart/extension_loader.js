extensions.load("contenthandler", {
  extension : {
     "pdf" : "xterm -e 'wget -q -O - %u | zathura -'"
  }
});

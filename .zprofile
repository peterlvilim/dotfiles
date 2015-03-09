TZ='America/Chicago'; export TZ
export PATH=$PATH:/home/pvilim/bin
if [ -z $SSH_CLIENT ] && [ -z $DISPLAY ]; then
    startx
fi

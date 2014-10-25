dotfiles
========
These are the dotfiles I use across my machines.  A list of key software is included below.

- Window Manager: [i3](http://i3wm.org) - ([dotfiles](https://github.com/peterlvilim/i3dotfiles))
- Menu: [dmenu](http://tools.suckless.org/dmenu/)
- Terminal Emulator: [rxvt-unicode](https://wiki.archlinux.org/index.php/rxvt-unicode)
- Shell: [ZSH](https://wiki.archlinux.org/index.php/zsh) ([oh-my-zsh](https://github.com/robbyrussell/oh-my-zsh), [Vim powerline](https://github.com/Lokaltog/vim-powerline))
- Editor: [Vim](http://en.wikipedia.org/wiki/Vim_(text_editor)) ([Airline](https://github.com/bling/vim-airline), [CtrlP](https://github.com/kien/ctrlp.vim), [GitGutter](https://github.com/airblade/vim-gitgutter), [Fugitive](https://github.com/tpope/vim-fugitive), [Eclim](http://eclim.org), [syntastic](https://github.com/scrooloose/syntastic))
- Email: [Mutt](http://www.mutt.org/) ([offlineimap](http://offlineimap.org/), [msmtp](http://msmtp.sourceforge.net/))
- Todo List: [todo.txt](https://github.com/ginatrapani/todo.txt-cli)
- Password Management: [Pass](http://www.passwordstore.org/)
- Chat: [Irssi](http://www.irssi.org/), [Profanity](http://www.profanity.im/)
- Browser: [dwb](http://portix.bitbucket.org/dwb/)
- Music: [Mopidy](https://www.mopidy.com/)([mopidy-spotify](https://github.com/mopidy/mopidy-spotify), [ncmpcpp](http://ncmpcpp.rybczak.net/))
- File Sync: [Syncthing](https://github.com/syncthing/syncthing), [Git](http://git-scm.com/)
- Backup: [Tarnsap](http://www.tarsnap.com/)
- Encryption: [GPG](https://www.gnupg.org/), [dm-crypt](http://en.wikipedia.org/wiki/Dm-crypt), [Ciphershed](https://ciphershed.org/)
- Color Scheme: [Solarized](http://ethanschoonover.com/solarized)

I use [dfm](https://github.com/justone/dfm) to handle the symlinking of these.

To install:
git clone https://github.com/peterlvilim/dotfiles.git .dotfiles

cd .dotfiles
git submodule init
git submodule update
cd bin
./dfm install

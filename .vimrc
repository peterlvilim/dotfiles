syntax on " color for file syntax
set title " display doc name in terminal title
set nobackup " don't write backup files since I use git
set nowb
set noswapfile " dont write swap files
" remap pressing jk in insert mode to exiting insert mode
inoremap jk <Esc>
colorscheme badwolf " set color scheme to bad wolf
set tabstop=4       " number of visual spaces per TAB
set softtabstop=4   " number of spaces in tab when editing
set expandtab       " tabs are spaces
set showcmd             " show command in bottom bar
filetype indent on      " load filetype-specific indent files
filetype plugin on " enable vim files on a filetype basis (see ftplugin folder)

" move to beginning/end of line
nnoremap B ^
nnoremap E $

" $/^ doesn't do anything (force self to use above)
nnoremap $ <nop>
nnoremap ^ <nop>

" move vertically by visual line (force self to use new mappings)
nnoremap j gj
nnoremap k gk

map M :!make<CR><Esc>

" Tell vim to remember certain things when we exit
"  '10  :  marks will be remembered for up to 10 previously edited files
"  "100 :  will save up to 100 lines for each register
"  :20  :  up to 20 lines of command-line history will be remembered
"  %    :  saves and restores the buffer list
"  n... :  where to save the viminfo files
set viminfo='10,\"100,:20,%,n~/.viminfo
set viminfo='10,\"100,:20,%,n~/.viminfo

nnoremap ; :

" disable arrow keys in command mode
map <up> <nop>
map <down> <nop>
map <left> <nop>
map <right> <nop>

set ignorecase " ignore case when searching
set smartcase " only use case if not all lower case in search
set smarttab " smart tab indenting as you edit code
set hlsearch " highight search terms
set incsearch " show search results as you type

set pastetoggle=<F2>

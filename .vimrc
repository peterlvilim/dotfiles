set nocompatible
syntax on
set title
set nobackup
set nowb
set noswapfile
inoremap jj <Esc>
colorscheme badwolf/colors/badwolf
set tabstop=4       " number of visual spaces per TAB
set softtabstop=4   " number of spaces in tab when editing
set expandtab       " tabs are spaces
set showcmd             " show command in bottom bar
filetype indent on      " load filetype-specific indent files

" move to beginning/end of line
nnoremap B ^
nnoremap E $

" $/^ doesn't do anything
nnoremap $ <nop>
nnoremap ^ <nop>

" move vertically by visual line (force self to use new mappings)
nnoremap j gj
nnoremap k gk

map P :!pdflatex %<CR><Esc>
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

map <up> <nop>
map <down> <nop>
map <left> <nop>
map <right> <nop>

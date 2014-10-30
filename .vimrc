" plugins
set nocompatible " break backwards compatibility
" install all plugins in bundle folder
execute pathogen#infect()
filetype plugin on " enable vim files on a filetype basis (see ftplugin folder)

" colors
colorscheme solarized " set color scheme to bad solarized
set background=dark " use a dark color theme
let g:solarized_termcolors = 16 " use 16 color solarized
let g:solarized_termtrans =   0 " disable compability
let g:solarized_degrade   =   0 " disable compatibility
let g:solarized_bold      =   1 " enable bold fonts
let g:solarized_underline =   1 " enable underline fonts
let g:solarized_italic    =   1 " enable italic fonts
let g:solarized_contrast  =   "normal" " default contrast for text
let g:solarized_visibility=   "normal" " dfault visibility for text
syntax on " enable syntax highlighting


set title " display doc name in terminal title
set showcmd             " show command in bottom bar

" temp files
set nobackup " don't write backup files since I use git
set nowb " don't write backup files since I use git
set noswapfile " dont write swap files
inoremap jk <Esc>| " remap pressing jk in insert mode to exiting insert mode
vnoremap jk <Esc>| " remap pressing jk in visual mode to exiting visual mode

" formatting
set tabstop=4       " number of visual spaces per TAB
set softtabstop=4   " number of spaces in tab when editing
set expandtab       " tabs are spaces
filetype indent on      " load filetype-specific indent settings
set smarttab " smart tab indenting as you edit code

" movement
nnoremap B ^| " move to beginning of line
nnoremap E $| " move to end of line
nnoremap dB d^| " also remap delete
nnoremap dE d$| " also remap delete
vnoremap B ^| " also remap visual mode
vnoremap E $| " also remap visual mode
nnoremap j gj| " move by visual line
nnoremap k gk| " move by visual line
nnoremap K <C-B> " page up
nnoremap J <C-F> " page down
let mapleader="," " map leader from \ to ,
nnoremap <C-h> <C-w>h| " move window left
nnoremap <C-j> <C-w>j| " move window down
nnoremap <C-k> <C-w>k| " move window up
nnoremap <C-l> <C-w>l| " move window right
nmap <Space> i_<Esc>r| " use space to insert one char
set scrolloff=2 " keep two lines on screen when scrolling

set viminfo='10,\"100,:20,%,n~/.viminfo " remember where in a file we were when we closed

nnoremap ; :| " map the ; to do the same as pressing SHIFT+;

" search
set ignorecase " ignore case when searching
set smartcase " only use case if not all lower case in search
set hlsearch " highight search terms
set incsearch " show search results as you type
nmap <silent> ,/ :nohlsearch<CR>| " disable highlighting easily

set pastetoggle=<F2>
set number

au BufReadPost * if line("'\"") > 1 && line("'\"") <= line("$") | exe "normal! g`\"" | endif
set laststatus=2
set shortmess=I

" status line
let g:airline_powerline_fonts = 1 " enable powerline symbols for status
let g:promptline_preset = {
        \'a' : [ promptline#slices#host() ],
        \'c' : [ promptline#slices#cwd() ],
        \'x' : [ promptline#slices#git_status() ],
        \'y' : [ promptline#slices#vcs_branch() ],
        \'warn' : [ promptline#slices#last_exit_code() ]}
let g:airline#extensions#whitespace#enabled = 0 " disable whitespace detection on status line

" tagbar
nnoremap z :TagbarOpenAutoClose<CR>| " command to open tagbar
let g:tagbar_compact = 1 " remove the help item
let g:tagbar_sort = 0 " sort by order in file

noremap <F1> <Esc>| " Avoid accidental hits of <F1> while aiming for <Esc>
nnoremap Q <nop>|  " Turn off Q

" Write with sudo with :W
cmap w!! w !sudo tee % >/dev/null " Use w!! to write file using sudo

" python-mode
let g:pymode_folding = 0 " disable folding
let g:pymode_lint_on_write = 1 " disable lint on write (run manually)
let g:pymode_doc_bind = ''
" eclim
let g:EclimCompletionMethod = 'omnifunc' " use YouCompleteMe for eclim completion

if executable('ag')
  " Use Ag over Grep
  set grepprg=ag\ --nogroup\ --nocolor

  " Use ag in CtrlP for listing files. Lightning fast and respects .gitignore
  let g:ctrlp_user_command = 'ag %s -l --nocolor -g ""'
endif

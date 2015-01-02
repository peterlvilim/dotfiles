set tabstop=8
set expandtab
set shiftwidth=4
set softtabstop=4
let g:syntastic_mode_map = { "mode": "passive" } " disable syntastic
" let g:ycm_auto_trigger=0 " disable ycm
let autoreadargs={'autoread':1}
execute WatchForChanges("*",autoreadargs)
let g:pymode_rope_completion = 0
let g:pymode_rope_goto_definition_bind = "<leader>d"

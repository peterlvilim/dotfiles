set tabstop=8
set expandtab
set shiftwidth=4
set softtabstop=4
let g:syntastic_mode_map = { "mode": "passive" } " disable syntastic
" let g:ycm_auto_trigger=0 " disable ycm
let autoreadargs={'autoread':1}
execute WatchForChanges("*",autoreadargs)
let g:pymode_rope_completion = 1
let g:pymode_rope_goto_definition_bind = "<leader>d"
let g:pymode_lint_unmodified = 1
let g:pymode_lint_checkers = ['pyflakes', 'pep8']

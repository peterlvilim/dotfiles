nnoremap <silent> <buffer> <leader>i :JavaImport<cr>
nnoremap <leader>c :JavaCorrect<cr>
nnoremap <leader>C :JavaCallHierarchy<cr>
nnoremap <leader>d :JavaSearch -t all -x declerations<cr>
nnoremap <leader>D :JavaSearch -t all -x implementors<cr>
let autoreadargs={'autoread':1}
execute WatchForChanges("*",autoreadargs)

// Divjot for Desktop by Brett Fraley
// Copyright 2016
let main_output = document.getElementById('main-output')
let main_editor = document.getElementById('main-editor');

main_editor.addEventListener('keyup', function() {
    main_output.innerHTML = main_editor.value
}, false)

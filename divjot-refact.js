// Divjot for Desktop by Brett Fraley
// Copyright 2016


function Divjot_User() {

}

function Divjot_Settings() {

}

function Divjot_UI() {

}


function Divjot(user, settings, ui) {
    this.user = user || new Divjot_User();
    this.settings = settings || new Divjot_Settings();
    this.ui = ui || new Divjot_UI();



}


(function() {

  /* Markup and Style output elements. */
  let main_output = document.getElementById('main-output');
  let style_output = document.getElementById('style-output');

  /* Editor elements. */
  let main_editor = document.getElementById('main-editor');
  let style_editor = document.getElementById('style-editor');
  let js_editor = document.getElementById('js-editor');

  /* Editor event listeners */
  main_editor.addEventListener('keyup' || 'keypress', function() {
      main_output.innerHTML = main_editor.value;
  }, false);

  style_editor.addEventListener('keyup' || 'keypress', function() {
      style_output.innerHTML = style_editor.value;
  }, false);

  js_editor.addEventListener('keyup' || 'keypress', function() {
      return eval(js_editor.value)
  }, false);

}());

function validateForm() {
  var x = document.forms ["chat"] ["firstname"].value;
  if ( x == "" ) { 
    alert("Name must be filled out");
    return false;
  } 
}

function validateForm() {
  var x = document.forms ["chat"] ["lastname"].value;
  if ( x == "" ) { 
    alert("Name must be filled out");
    return false;
  } 
}

function validateForm() {
  var x = document.forms ["chat"] ["email"].value;
  if ( x == "" ) { 
    alert("Email must be filled out");
    return false;
  } 
}

function validateForm() {
  var x = document.forms ["chat"] ["subject"].value;
  if ( x == "" ) { 
    alert("Message must be filled out");
    return false;
  } 
}
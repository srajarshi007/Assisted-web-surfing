var everything = document.getElementsByClassName("*");
console.log('hello');
for(var j=0;j<everything.length;j++){
    console.log(everything[i].className.toString());
}
for (var i = 0; i < everything.length; i++) {
  // Look at the full content
  var txt = everything[i].innerHTML;
  //var s = "test the <img the> the";

  // This is a way of splitting up by tags.
  var tokens = txt.split(/(<.*?>)/);
  for (var j = 0; j < tokens.length; j++) {
    // Ignore anything that is a tag
    if (tokens[j].charAt(0) !== '<') {
      // Now replace the word "the" with "the" spanned with the class "redact"
      tokens[j] = tokens[j].replace(/\bannouncements\b/gi,'<span class="redact">Click Here</span>');
    }
  }
  // Put everything back in
  everything[i].innerHTML = tokens.join('');
}
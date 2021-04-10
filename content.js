
console.log('Chrome extension go?');

chrome.runtime.onMessage.addListener(gotMessage);

function gotMessage(message, sender, sendResponse) {
  console.log(message);
  console.log(message.txt);
  var everything = document.getElementsByTagName('*');
  console.log('hello');
  for(var j = 0;j < everything.length; j++){
        if(message.txt!="")
        {
          console.log(everything[j].getAttribute('aria-label'));
          if(everything[j].getAttribute('aria-label')==message.txt){
              everything[j].style.cssText="border: 5px solid red; background-color: #FFD700";

          }
          if(everything[j].title==message.txt){
            everything[j].style.cssText="border: 5px solid red; background-color: #FFD700";
            
          }
        }
}



  
} 
  /*for (var i = 0; i < everything.length; i++) {
    var txt = everything[i].innerHTML;
    var tokens = txt.split(/(<.*?>)/);
    for (var j = 0; j < tokens.length; j++) {
      if (tokens[j].charAt(0) !== '<') {
        tokens[j] = tokens[j].replace(/\bAnnouncements\b/gi,'<span class="redact">Click Here</span>');
      }
    }
    everything[i].innerHTML = tokens.join('');*/
  


  



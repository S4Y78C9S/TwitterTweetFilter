//var simplePrefs = require('sdk/simple-prefs');

var g_text = "";

self.port.on("changePrefs", function(pref) {
  g_text = pref;
  //console.log("changePrefs: " + g_text);
  main();

});

function main() {
  console.log("=== main() start ===");
  //console.log(event);
  
  //var a = simplePrefs.prefs['somePreference'];
  //console.log(a);
  //console.log("twitter.js: " + g_text);
  
  if ( g_text == "" ) {
    return;
  }
  
  //class="bdb cfx spaced"
  $("li[data-item-type='tweet']").each(function() {
    //$(this).css("color", "blue");
    //$(this).remove();
    //$(this).children("div").hide();
    //$(this).children("div").children("div.content").hide();
    //$(this).children("div").children("div.content").children("p").hide();
    
    //console.log("Hello World");
    var str = $(this).children("div").children("div.content").children("p").text();
    //console.log(str);
    
    var nglist = g_text.split(",");
    for ( var i = 0; i < nglist.length; ++i) {
        var ngword = nglist[i];
        ngword = ngword.replace(/^\s+|\s+$/g, ""); 
        if ( ngword == "" ) {
            continue;
        }
        
        var index = str.search(ngword);
        //var index = str.search("e");
        //console.log(ngword);
        //console.log(index);
        if ( index != -1 ) {
            $(this).hide();
        }
    }
    
  });
}

$(document).bind('DOMAttrModified',function(event){
    main();
});




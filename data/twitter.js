//var simplePrefs = require('sdk/simple-prefs');

var g_text = "";

self.port.on("changePrefs", function(pref) {
    g_text = pref;
    //console.log("changePrefs: " + g_text);
    main();

});

// 文字列を配列に変換
var str2array = function(str) {
    var array = [],i,il=str.length;
    for(i=0;i<il;i++) array.push(str.charCodeAt(i));
    return array;
};

function tweet_hide_check( target, str) {
    //console.log("str: " + str);
    str = str.replace(/\r?\n/g, " ");
    str = str.replace(/ +/g, " ");
    //console.log("str(\\r\\n->space): " + str);


    var nglist = g_text.split(",");
    for ( var i = 0; i < nglist.length; ++i) {
        var ngword = nglist[i];
        ngword = ngword.replace(/^\s+|\s+$/g, ""); 
        if ( ngword == "" ) {
            continue;
        }
        
        //var index = str.search(ngword);
        
        var obj = new RegExp( ngword, "i");
        var index = str.search( obj );
        if ( index != -1 ) {
            target.hide();
            //console.log("=== hide:" + str);
        }
    }
};

function main() {
  if ( g_text == "" ) {
    return;
  }
  
  $("li[data-item-type='tweet']").each(function() {
    var str = $(this).children("div").children("div.content").children("p").text();
    tweet_hide_check( $(this), str );
    
  });
  $("div[data-component-context='replies']").each(function() {
    var str = $(this).children("div.content").children("p").text();
    tweet_hide_check( $(this), str );
    
  });
  /*
  $("div.has-conversation-module").each(function() {
    var str = $(this).children("div.content").children("p").text();
    tweet_hide_check( $(this), str );
    
  });
  */
};








// オブザーバインスタンスを作成
var observer = new MutationObserver(function(mutations) {

    observer.disconnect();
    //console.log("=== MutationObserver() start ===");
    //console.log("mutations = " + mutations);
    main();
    observer.observe( document, config);


});
 
// オブザーバの設定
var config = { attributes: true, childList: true, characterData: true, subtree:true }
 
// 対象ノードとオブザーバの設定を渡す
observer.observe( document, config);
//console.log("=== observer.observe() done ===");






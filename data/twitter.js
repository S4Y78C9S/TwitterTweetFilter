//var simplePrefs = require('sdk/simple-prefs');

var g_text = "";

self.port.on("changePrefs", function(pref) {
	g_text = pref;
	//console.log("changePrefs: " + g_text);
	main();

});
self.port.on("onUnload", function(reason) {
	observer.disconnect();
});


function tweet_hide_check( target_element, str_orig) {
	//console.log("str_orig: " + str_orig);
	str = str_orig.replace(/\r?\n/g, " ");
	str = str.replace(/ +/g, " ");
	//console.log("str(\\r\\n->space): " + str);


	var nglist = g_text.split(",");
	for ( var i = 0; i < nglist.length; ++i) {
		var ngword = nglist[i];
		ngword = ngword.replace(/^\s+|\s+$/g, ""); 
		if ( ngword == "" ) {
			continue;
		}
		//console.log("ngword="+ngword);

		//var index = str.search(ngword);
		
		var obj = new RegExp( ngword, "i");
		var index = str.search( obj );
		var index_orig = str_orig.search( obj );
		//console.log("index="+index);
		//console.log("index_orig="+index_orig);
		if ( index != -1 || index_orig != -1) {
			//console.log("=== match: ngword=" + ngword + ", str_orig=" + str_orig);
			target_element.hide();
			//console.log("=== hide:" + str);
		}
	}
};

function main() {
	//console.log("=== main() start ===");
	if ( g_text == "" ) {
		return;
	}

	// timeline
	$("li[data-item-type='tweet']").each(function() {
		// debug
		/*
		var a = $(this).text();
		console.log("a="+a);
		var b = $(this).children("div").text();
		console.log("b="+b);
		var c = $(this).children("div").children("div.content").text();
		console.log("c="+c);
		var d = $(this).find("div.content").text();
		console.log("d="+d);
		*/
		//var str = $(this).children("div").children("div.content").children("p").text();
		//var str = $(this).find("div.content").children("p").text();
		var str = $(this).find("div.content").find("p").text();
		tweet_hide_check( $(this), str );
	
	});

	// reply
	$("div[data-component-context='replies']").each(function() {
		//var str = $(this).children("div.content").children("p").text();
		var str = $(this).find("div.content").find("p").text();
		tweet_hide_check( $(this), str );

	});

  /*
  // search result
  $("div[data-component-context='replies']").each(function() {
	var str = $(this).children("div.content").children("p").text();
	tweet_hide_check( $(this), str );
	
  });
  */
  /*
  $("div.has-conversation-module").each(function() {
	var str = $(this).children("div.content").children("p").text();
	tweet_hide_check( $(this), str );
	
  });
  */
};









var observer = new MutationObserver(function(mutations) {

	observer.disconnect();
	//console.log("=== MutationObserver() start ===");
	//console.log("mutations = " + mutations);
	main();
	observer.observe( document, config);


});
 

var config = { childList: true, subtree:true }


observer.observe( document, config);
//console.log("=== observer.observe() done ===");






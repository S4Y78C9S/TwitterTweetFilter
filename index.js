// Import the page-mod API
var pageMod = require("sdk/page-mod");
// Import the self API
var self = require("sdk/self");

//console.log("=== main.js loaded ===");

var g_text = "";

// Create a page mod
// It will run a script whenever a ".org" URL is loaded
// The script replaces the page contents with a message

var worker = pageMod.PageMod({
  include: "*.twitter.com",
  contentScriptWhen: 'start',
  contentScriptFile: [
    self.data.url("jquery-2.1.4.min.js"),
    self.data.url("twitter.js")],
  onAttach: function(worker) {
    worker.port.emit("changePrefs", require('sdk/simple-prefs').prefs['filterwordslist']);
  }
});

// affect to https://twitter.com tab when user install this addon with opening https://twitter.com at another tab.
//worker.port.emit("changePrefs", require('sdk/simple-prefs').prefs['filterwordslist']);
//onPrefChange("filterwordslist");


function onPrefChange(prefName) {
    //console.log("The " + prefName + " preference changed.");
    //console.log( require('sdk/simple-prefs').prefs['filterwordslist'] );
    //console.log( "onPrefChange: " + require('sdk/simple-prefs').prefs[prefName] );
    
    g_text = require('sdk/simple-prefs').prefs['filterwordslist'];
    worker.port.emit("changePrefs", require('sdk/simple-prefs').prefs['filterwordslist']);
}


require("sdk/simple-prefs").on("filterwordslist", onPrefChange);

// `""` listens to all changes in the extension's branch
require("sdk/simple-prefs").on("", onPrefChange);


exports.onUnload = function (reason) {
	worker.port.emit("onUnload", reason);
};

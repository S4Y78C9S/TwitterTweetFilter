WHAT'S THIS

  A addon to hide tweet including specified words.


INSTALLATION

1. Install twittertweetfilter.xpi.
2. Addon -> TwitterTweetFilter -> Settings.
3. Set the filter words list.
4. Restart the firefox.


FILTER WORDS LIST

  The filter words list is a list of words (g_text in below code). It will be processed by String.split() and String.search() in JavaScript. String.search() parse regular expression string, so you must quote ('\') the special symbols of the regular expression (e.g. [, ], (, ), etc.)


--- Essense of This Addon ----------------------------
    var nglist = g_text.split(",");
    for ( var i = 0; i < nglist.length; ++i) {
        var index = str.search(ngword);
        if ( index != -1 ) {
            $(this).hide();
        }
    }
------------------------------------------------------

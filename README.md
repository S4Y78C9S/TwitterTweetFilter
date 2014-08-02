WHAT'S THIS
===========
  A addon to hide tweet including specified words.


INSTALLATION
------------

1. Install twittertweetfilter.xpi.
2. Addon -> TwitterTweetFilter -> Settings.
3. Set the filter words list.
4. Restart the firefox.
5. Go to https://twitter.com/
6. The tweets including the words you specified will be hidden.


FILTER WORDS LIST
-----------------

  The filter words list is a list of words (g_text in below code). It will be processed by String.split() and String.search() in JavaScript. String.search() parse regular expression string, so you must quote ('\') the special symbols of the regular expression (e.g. [, ], (, ), etc.)


'''javascript
    var nglist = g_text.split(",");
    for ( var i = 0; i < nglist.length; ++i) {
        var index = str.search(ngword);
        if ( index != -1 ) {
            $(this).hide();
        }
    }
'''


TODO
----

- Add setting dialog.
- To modify not to need restart.
- Be able to set any user name to hide.
- Use MutationObserver instead of DOMAttrModified.


COLLABORATORS
-------------

  I am looking for any collaborators. please contact me
    Tanaka Kenta <a3269684@yahoo.co.jp>


WHAT'S THIS
===========
  Hide the tweets including specified words.


INSTALLATION
------------

1. Install twittertweetfilter.xpi.
2. Add-ons -> Extensions -> TwitterTweetFilter -> Options.
3. Set the filter words list.
4. Go to https://twitter.com/
5. The tweets including the words you specified will be hidden.


FILTER WORDS LIST
-----------------

  The filter words list is a list of words ('g_text' in below code). It will be processed by String.split() and String.search() in JavaScript. String.search() parses regular expression string, so you can quote ('\') the metacharacters of the regular expression (e.g., [, ], (, ), ., etc.)

  Case insensitive.

```javascript
    var nglist = g_text.split(",");
    for ( var i = 0; i < nglist.length; ++i) {
        var obj = new RegExp( ngword, "i");
        var index = str.search(obj);
        if ( index != -1 ) {
            $(this).hide();
        }
    }
```

EXAMPLES
--------

- "a"
> Hide tweet including "a" or "A".
- "\\[ab\\]"
> Hide tweet including "[ab]" or "[AB]" or "[aB]" or "[Ab]".
- "[ab]"
> Hide tweet including "a" or "b" or "A" or "B". (regular expression)
- "a, b"
> Hide tweet including "a" or "A" or "b" or "B".
- "\\bfat\\b"
> Hide tweet including "fat" a word. "sofat" and "fatty" will not be hidden. (regular expression)


TODO
----

- Add a preferences dialog.
- Be able to set usernames to hide.
- Store hidden tweets to the other window for just in case.
- Own Addon Icon.


SIMILAR ADDONS
--------------
- Larry filter for Twitter (https://addons.mozilla.org/firefox/addon/larry-filter/)
-- One of the twitter filter but doesn't support UTF-8 :(


COLLABORATORS
-------------

  I am looking for any collaborators. please contact me.

    Kenta Tanaka <a3269684@yahoo.co.jp>


WHAT'S THIS
===========
  To hide the tweets including specified words.


INSTALLATION
------------

1. Install twittertweetfilter.xpi.
2. Add-ons -> Extensions -> TwitterTweetFilter -> Options.
3. Set the filter words list.
4. Go to https://twitter.com/
5. The tweets including the words you specified will be hidden.


FILTER WORDS LIST
-----------------

  The filter words list is a list of words ('g_text' in below code). It will be processed by String.split() and String.search() in JavaScript. String.search() parses regular expression string, so you can quote ('\') the metacharacters of the regular expression (e.g. [, ], (, ), ., etc.)


```javascript
    var nglist = g_text.split(",");
    for ( var i = 0; i < nglist.length; ++i) {
        var index = str.search(ngword);
        if ( index != -1 ) {
            $(this).hide();
        }
    }
```

EXAMPLES
--------
- "a"
> Hide the tweet including "a".
- "\\[ab\\]"
> Hide the tweet including "[ab]".
- "[ab]"
> Hide the tweet including "a" or "b". (regular expression)
- "a, b"
> Hide the tweet including "a" or "b".


TODO
----

- Add setting dialog.
- Be able to set (any user name, filter words list) pair to hide.
- Store hidden tweets to the other windows for just in case.


COLLABORATORS
-------------

  I am looking for any collaborators. please contact me.

    Kenta Tanaka <a3269684@yahoo.co.jp>


MagicDOM - a DSL for building HTML in node.js
===========================================

More information:

  * [node.magic_dom: A DSL for building HTML in node.js](http://amix.dk/blog/post/19505#node-magic-dom-A-DSL-for-building-HTML-in-node-js) 

Example 1
----------

Following JS code:
    sys.puts(
        DIV({id: 'meaning', onclick: 'alert(42)'}, 
            "Meaning")
    )

Would output:

    <div id="meaning" onclick="alert(42)">Meaning</div>


Example 2
----------

Following JS code:

    sys.puts(
        DIV({id: 'meaning', onclick: 'alert(42)'}, 
            "Meaning")
    )

Would output:

    <div><a href="http://www.spam.com">Click me!!!</a></div>

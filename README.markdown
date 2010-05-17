MagicDOM - a DSL for building HTML in node.js
===========================================

More information:
[node.magic_dom: A DSL for building HTML in node.js](http://amix.dk/blog/post/19505#node-magic-dom-A-DSL-for-building-HTML-in-node-js) 

Example 1
----------

JS code:
    sys.puts(
        DIV({id: 'meaning', onclick: 'alert(42)'}, 
            "Meaning")
    )

Output:

    <div id="meaning" onclick="alert(42)">Meaning</div>


Example 2
----------

JS code:

    var link, my_template;
    my_template = DIV(
        link = A({href: 'http://www.spam.com'}, 'Click me!!!')
    )
    sys.puts(my_template)

Output:

    <div><a href="http://www.spam.com">Click me!!!</a></div>

var sys = require("sys"),
    MagicDOM = require("./lib/node.magic_dom");


sys.puts(
    DIV({id: 'meaning', onclick: 'alert(42)'}, 
        "Meaning")
)


sys.puts(
    DIV({style: 'font-size: 15px'},
         H1({c: 'header'}, "Hello world"),
         B('Hello world in bold')
    )
)

var link, my_template;
my_template = DIV(
    link = A({href: 'http://www.spam.com'}, 'Click me!!!')
)
sys.puts(my_template)

link.class = 'spam'
sys.puts(link)

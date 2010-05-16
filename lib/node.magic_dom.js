/*
 * MagicDOM: A DSL for building HTML in node.js
 *
 * For more info and usage check out:
 *    http://amix.dk/blog/post/19505#MagicDOM-A-DSL-for-building-HTML-in-node-js
 *
 * Made by amix the lucky stiff - amix.dk
 * Copyright amix 2010, released under BSD license
 */
MagicDOM = {

    createDOM: function(name, attrs) {
        var i=0, attr
        var elm = new Element(name)

        var first_attr = attrs[0]
        if(MagicDOM._isDict(attrs[i])) {
            for(k in first_attr) {
                attr = first_attr[k]
                elm[k] = attr
            }
            i++
        }

        if(first_attr == null)
            i = 1

        for(var j=i; j < attrs.length; j++) {
            var attr = attrs[j]
            if(attr) {
                var type = typeof(attr)
                if(type == 'string' || type == 'number')
                    attr = TN(attr)
                elm.appendChild(attr)
            }
        }

        return elm
    },

    _exportDomShortcuts: function() {
        var elms = [
            "ul", "li", "td", "tr", "th",
            "tbody", "table", "input", "span", "b",
            "a", "div", "img", "button", "h1",
            "h2", "h3", "br", "textarea", "form",
            "p", "select", "option", "optgroup", "iframe", "script",
            "center", "dl", "dt", "dd", "small",
            "pre"
        ]

        var export_shortcut = function(elm) {
            GLOBAL[elm.toUpperCase()] = function() {
                return MagicDOM.createDOM.apply(null, [elm, arguments]); 
            };
        }

        for(var i=0; i < elms.length; i++)
            export_shortcut(elms[i]);
            
        GLOBAL['TN'] = function(text) { 
            var elm = new Element('text')
            elm.value = text
            return elm
        }
    },

    _isDict: function(o) {
        var str_repr = String(o)
        return str_repr.indexOf(" Object") != -1
    }

}


function Element(tag_name) {
    this.tag_name = tag_name
    this.children = []
}

Element.prototype.appendChild = function(elm) {
    this.children.push(elm)
}

Element.prototype.toString = function() {
    if(this.tag_name == 'text') {
        return this.value
    }
    else {
        var html = []
        html.push('<' + this.tag_name)
        for(var key in this) {
            if(!Element._common_attrs[key]) {
                if(key == 'class' || key == 'c')
                    html.push(' class="' + this[key] + '"')
                else
                    html.push(' '+ key +'="' + this[key] + '"')
            }
        }
        html.push('>')

        for(var i=0; i < this.children.length; i++) {
            var child = this.children[i]

            if(child == this)
                continue

            html.push(child.toString())
        }

        html.push('</' + this.tag_name + '>')

        return html.join('')
    }
}

Element._common_attrs = {
    'tag_name': 1, 'toString': 1,
    'appendChild': 1, 'children': 1
}


MagicDOM._exportDomShortcuts()
exports['createDOM'] = MagicDOM.createDOM

!function() {
    var c_c = {
        version: '0.0.1'
    };
    this.c_c = c_c;

    var colorDict = {
          'aqua': '#00ffff',
          'aliceblue': '#f0f8ff',
          'antiquewhite': '#faebd7',
          'black': '#000000',
          'blue': '#0000ff',
          'cyan': '#00ffff',
          'darkblue': '#00008b',
          'darkcyan': '#008b8b',
          'darkgreen': '#006400',
          'darkturquoise': '#00ced1',
          'deepskyblue': '#00bfff',
          'green': '#008000',
          'lime': '#00ff00',
          'mediumblue': '#0000cd',
          'mediumspringgreen': '#00fa9a',
          'navy': '#000080',
          'springgreen': '#00ff7f',
          'teal': '#008080',
          'midnightblue': '#191970',
          'dodgerblue': '#1e90ff',
          'lightseagreen': '#20b2aa',
          'forestgreen': '#228b22',
          'seagreen': '#2e8b57',
          'darkslategray': '#2f4f4f',
          'darkslategrey': '#2f4f4f',
          'limegreen': '#32cd32',
          'mediumseagreen': '#3cb371',
          'turquoise': '#40e0d0',
          'royalblue': '#4169e1',
          'steelblue': '#4682b4',
          'darkslateblue': '#483d8b',
          'mediumturquoise': '#48d1cc',
          'indigo': '#4b0082',
          'darkolivegreen': '#556b2f',
          'cadetblue': '#5f9ea0',
          'cornflowerblue': '#6495ed',
          'mediumaquamarine': '#66cdaa',
          'dimgray': '#696969',
          'dimgrey': '#696969',
          'slateblue': '#6a5acd',
          'olivedrab': '#6b8e23',
          'slategray': '#708090',
          'slategrey': '#708090',
          'lightslategray': '#778899',
          'lightslategrey': '#778899',
          'mediumslateblue': '#7b68ee',
          'lawngreen': '#7cfc00',
          'aquamarine': '#7fffd4',
          'chartreuse': '#7fff00',
          'gray': '#808080',
          'grey': '#808080',
          'maroon': '#800000',
          'olive': '#808000',
          'purple': '#800080',
          'lightskyblue': '#87cefa',
          'skyblue': '#87ceeb',
          'blueviolet': '#8a2be2',
          'darkmagenta': '#8b008b',
          'darkred': '#8b0000',
          'saddlebrown': '#8b4513',
          'darkseagreen': '#8fbc8f',
          'lightgreen': '#90ee90',
          'mediumpurple': '#9370db',
          'darkviolet': '#9400d3',
          'palegreen': '#98fb98',
          'darkorchid': '#9932cc',
          'yellowgreen': '#9acd32',
          'sienna': '#a0522d',
          'brown': '#a52a2a',
          'darkgray': '#a9a9a9',
          'darkgrey': '#a9a9a9',
          'greenyellow': '#adff2f',
          'lightblue': '#add8e6',
          'paleturquoise': '#afeeee',
          'lightsteelblue': '#b0c4de',
          'powderblue': '#b0e0e6',
          'firebrick': '#b22222',
          'darkgoldenrod': '#b8860b',
          'mediumorchid': '#ba55d3',
          'rosybrown': '#bc8f8f',
          'darkkhaki': '#bdb76b',
          'silver': '#c0c0c0',
          'mediumvioletred': '#c71585',
          'indianred': '#cd5c5c',
          'peru': '#cd853f',
          'chocolate': '#d2691e',
          'tan': '#d2b48c',
          'lightgray': '#d3d3d3',
          'lightgrey': '#d3d3d3',
          'thistle': '#d8bfd8',
          'goldenrod': '#daa520',
          'orchid': '#da70d6',
          'palevioletred': '#db7093',
          'crimson': '#dc143c',
          'gainsboro': '#dcdcdc',
          'plum': '#dda0dd',
          'burlywood': '#deb887',
          'lightcyan': '#e0ffff',
          'lavender': '#e6e6fa',
          'darksalmon': '#e9967a',
          'palegoldenrod': '#eee8aa',
          'violet': '#ee82ee',
          'azure': '#f0ffff',
          'honeydew': '#f0fff0',
          'khaki': '#f0e68c',
          'lightcoral': '#f08080',
          'sandybrown': '#f4a460',
          'beige': '#f5f5dc',
          'mintcream': '#f5fffa',
          'wheat': '#f5deb3',
          'whitesmoke': '#f5f5f5',
          'ghostwhite': '#f8f8ff',
          'lightgoldenrodyellow': '#fafad2',
          'linen': '#faf0e6',
          'salmon': '#fa8072',
          'oldlace': '#fdf5e6',
          'bisque': '#ffe4c4',
          'blanchedalmond': '#ffebcd',
          'coral': '#ff7f50',
          'cornsilk': '#fff8dc',
          'darkorange': '#ff8c00',
          'deeppink': '#ff1493',
          'floralwhite': '#fffaf0',
          'fuchsia': '#ff00ff',
          'gold': '#ffd700',
          'hotpink': '#ff69b4',
          'ivory': '#fffff0',
          'lavenderblush': '#fff0f5',
          'lemonchiffon': '#fffacd',
          'lightpink': '#ffb6c1',
          'lightsalmon': '#ffa07a',
          'lightyellow': '#ffffe0',
          'magenta': '#ff00ff',
          'mistyrose': '#ffe4e1',
          'moccasin': '#ffe4b5',
          'navajowhite': '#ffdead',
          'orange': '#ffa500',
          'orangered': '#ff4500',
          'papayawhip': '#ffefd5',
          'peachpuff': '#ffdab9',
          'pink': '#ffc0cb',
          'red': '#ff0000',
          'seashell': '#fff5ee',
          'snow': '#fffafa',
          'tomato': '#ff6347',
          'white': '#ffffff',
          'yellow': '#ffff00',
          'rebeccapurple': '#663399'
        };

    //  color object constructor
    var Color = c_c.Color = function(opt){
        var rgbaval,hexval,hslaval,name;

        this.hex = function(str){
            if(arguments.length<=0){return hexval;}
            hexval = str.toLowerCase();
            rgbaval = hexToRGB(hexval);
            hslaval = rgbToHSL(rgbaval);
            name = hexToName(hexval);
        }

        this.rgb = function(r,g,b){
            if(arguments.length<=0){return rgbaval.slice(0,3);}
            this.rgba(r,g,b,1)
        }

        this.rgba = function(r,g,b,a){
            if(arguments.length<=0){return rgbaval;}
            rgbaval = [r,g,b,a];
            hexval = rgbToHEX(rgbaval);
            hslaval = rgbToHSL(rgbaval);
            name = hexToName(hexval);
        }

        this.hsl = function(h,s,l){
            if(arguments.length<=0){return hslaval.slice(0,3);}
            this.hsla(h,s,l,1)
        }

        this.hsla = function(h,s,l,a){
            if(arguments.length<=0){ return hslaval;}
            hslaval = [h,s,l,a];
            rgbaval = hslToRGB(hslaval);
            hexval= rgbToHEX(rgbaval);
            name = hexToName(hexval);
        }

        this.mix = function(color1, color2, w) {
            var weight = w ? w : 50,
                base = color1.rgba(),
                brend = color2.rgba(),
                newcolor = base.map(function(c,i){
                    if(i === 3){ return brend[i] + (c - brend[i]) * (weight / 100); }
                    return Math.floor(brend[i] + (c - brend[i]) * (weight / 100));
                });

            rgbaval = newcolor;
            hexval = rgbToHEX(rgbaval);
            hslaval = rgbToHSL(rgbaval);
            name = hexToName(hexval);
        }

        this.name = function(str) {
            if(arguments.length<=0){return name;}
            if (getKeys(colorDict).indexOf(str) < 0){return;}
            hexval = colorDict[str];
            rgbaval = hexToRGB(hexval);
            hslaval = rgbToHSL(rgbaval);
            name = hexToName(hexval);
        }

        this.values = function(){
            return {rgb: this.rgb(),
                rgba: this.rgba(),
                hex: this.hex(),
                hsl: this.hsl(),
                hsla: this.hsla(),
                name: name};
        }
    };

    // color manipulation methods
    // 'color' is an each instance of Color.

    // value getters
    c_c.red = function(color){
        return color.hex().substr(1,2);
    }

    c_c.green = function(color){
        return color.hex().substr(3,2);
    }

    c_c.blue = function(color){
        return color.hex().substr(5,2);
    }

    c_c.hue = function(color){
        return color.hsl()[0];
    }

    c_c.saturation = function(color){
        return color.hsl()[1];
    }

    c_c.lightness = function(color){
        return color.hsl()[3];
    }

    c_c.alpha = function(color){
        return color.rgba()[3];
    }

    c_c.opacity = function(color){
        return this.alpha(color);
    }

    // RGB
    c_c.invert = function(color){
        var inverted = color.rgba().map(function(c,i){
            if(i === 3) { return c; }
            return 255 - c;
        });

        return {rgb: inverted.slice(0,3),
                rgba: inverted,
                hex: rgbToHEX(inverted),
                hsl: rgbToHSL(inverted),
                hsla: rgbToHSL(inverted).concat([inverted[3]])};
    }

    c_c.adjust_red = function(color,deg,scale){
        var hsla,
            rgba = color.rgba().slice(0);

        if(deg){
            rgba[0] = Math.max(Math.min(rgba[0] + deg, 255),0);
        }else{
            scale>=0
            ? rgba[0] = Math.floor((255-rgba[0])*scale/100+rgba[0])
            : rgba[0] = Math.floor(rgba[0]*Math.abs(scale)/100)
        }

        hsla = rgbToHSL(rgba);
        return {rgb: rgba.slice(0,3),
                rgba: rgba,
                hex: rgbToHEX(rgba),
                hsl: hsla.slice(0,3),
                hsla: hsla};
    }

    c_c.adjust_green = function(color,deg,scale){
        var hsla,
            rgba = color.rgba().slice(0);

        if(deg){
            rgba[1] = Math.max(Math.min(rgba[1] + deg, 255),0);
        }else{
            scale>=0
            ? rgba[1] = Math.floor((255-rgba[1])*scale/100+rgba[1])
            : rgba[1] = Math.floor(rgba[1]*Math.abs(scale)/100)
        }

        hsla = rgbToHSL(rgba);
        return {rgb: rgba.slice(0,3),
                rgba: rgba,
                hex: rgbToHEX(rgba),
                hsl: hsla.slice(0,3),
                hsla: hsla};
    }

    c_c.adjust_blue = function(color,deg,scale){
        var hsla,
            rgba = color.rgba().slice(0);

        if(deg){
            rgba[2] = Math.max(Math.min(rgba[2] + deg, 255),0);
        }else{
            scale>=0
            ? rgba[2] = Math.floor((255-rgba[2])*scale/100+rgba[2])
            : rgba[2] = Math.floor(rgba[2]*Math.abs(scale)/100)
        }

        hsla = rgbToHSL(rgba);
        return {rgb: rgba.slice(0,3),
                rgba: rgba,
                hex: rgbToHEX(rgba),
                hsl: hsla.slice(0,3),
                hsla: hsla};
    }

    // HUE
    c_c.adjust_hue = function(color,deg){
        var rgb,
            hsla = color.hsla().slice(0),
            diff = 360 - (hsla[0]+deg);

        hsla[0] = diff > 360 ? 360 - (diff%360) : Math.abs(diff%360);
        rgba = hslToRGB(hsla);

        return {rgb: rgba.slice(0,3),
                rgba: rgba,
                hex: rgbToHEX(rgba),
                hsl: hsla.slice(0,3),
                hsla: hsla};
    }

    c_c.complement = function(color){
        return color.adjust_hue(180)
    }

    // SATURATION
    c_c.adjust_saturation = function(color,deg,scale){
        var rgb,
            hsla = color.hsla().slice(0);

        if(deg){
            hsla[1] = Math.max(Math.min(hsla[1] + deg, 100),0);
        }else{
            scale>=0
            ? hsla[1] = Math.floor((100-hsla[1])*scale/100+hsla[1])
            : hsla[1] = Math.floor(hsla[1]*Math.abs(scale)/100)
        }

        rgba = hslToRGB(hsla);

        return {rgb: rgba.slice(0,3),
                rgba: rgba,
                hex: rgbToHEX(rgba),
                hsl: hsla.slice(0,3),
                hsla: hsla};
    }

    c_c.saturate = function(color,deg){
        return this.adjust_saturation(color,deg)
    }

    c_c.desaturate = function(color,deg){
        return this.adjust_saturation(color,-deg)
    }

    c_c.grayscale = function(color){
        return this.adjust_saturation(color,100)
    }

    // LIGHTNESS
     c_c.adjust_lightness = function(color,deg,scale){
        var rgb,
            hsla = color.hsla().slice(0);

        if(deg){
            hsla[2] = Math.max(Math.min(hsla[2] + deg, 100),0);
        }else{
            scale>=0
            ? hsla[2] = Math.floor((100-hsla[2])*scale/100+hsla[2])
            : hsla[2] = Math.floor(hsla[2]*Math.abs(scale)/100)
        }

        rgba = hslToRGB(hsla);

        return {rgb: rgba.slice(0,3),
                rgba: rgba,
                hex: rgbToHEX(rgba),
                hsl: hsla.slice(0,3),
                hsla: hsla};
    }

    c_c.lighten = function(color,deg){
        return this.adjust_lightness(color, deg)
    }

    c_c.darken = function(color,deg){
        return this.adjust_lightness(color, -deg)
    }

    // ALPHA
    c_c.adjust_alpha = function(color,deg,scale){
        var rgba = color.rgba().slice(0),
            hsla = color.hsla().slice(0),
            a;

        if(deg){
            a = Math.round(Math.max(Math.min(this.alpha(color) + deg, 1),0)*100)/100;
        }else{
            scale>=0
            ? a = Math.floor((1-this.alpha(color))*scale+(this.alpha(color)*100))/100
            : a = Math.floor(this.alpha(color)*Math.abs(scale))/100
        }

        rgba[3] = a;
        hsla[3] = a
        return {
            rgba: rgba,
            hsla: hsla
        };
    }

    c_c.opacify = function(color,deg){
        return this.adjust_alpha(color,deg)
    }

    c_c.transparentize = function(color,deg){
        return this.adjust_alpha(color,-deg)
    }

    c_c.fade_in = function(color,deg){
        return this.adjust_alpha(color,deg)
    }

    c_c.fade_out = function(color,deg){
        return this.adjust_alpha(color,-deg)
    }

    // OTHER COLOR FUNCTIONS
    c_c.adjust_color = function(color,opt){
        var rgba = color.rgba().slice(0),
            hsla = color.hsla().slice(0);
        var operations = {
            red: function(deg){rgba[0] = this.adjust_red(color,deg).rgba[0]},
            green: function(deg){rgba[1] = this.adjust_green(color,deg).rgba[1]},
            blue: function(deg){rgba[2] = this.adjust_blue(color,deg).rgba[2]},
            hue: function(deg){hsla[0] = this.adjust_hue(color,deg).hsla[0]},
            saturation: function(deg){hsla[1] = this.adjust_saturation(color,deg).hsla[1]},
            lightoness: function(deg){hsla[2] = this.adjust_lightness(color,deg).hsla[2]},
            alpha: function(deg){
                    var a =  this.adjust_alpha(color,deg).hsla[3];
                    rgba[3] = a;
                    hsla[3] = a;
                }
        }

        getKeys(opt).forEach(function(key){
            operations[key].call(this,opt[key]);
        },this);

        return {rgb: rgba.slice(0,3),
                rgba: rgba,
                hex: rgbToHEX(rgba),
                hsl: hsla.slice(0,3),
                hsla: hsla};
    }

    c_c.scale_color = function(color,opt){
        var rgba = color.rgba().slice(0),
            hsla = color.hsla().slice(0);
        var operations = {
            red: function(scale){rgba[0] = this.adjust_red(color,null,scale).rgba[0]},
            green: function(scale){rgba[1] = this.adjust_green(color,null,scale).rgba[1]},
            blue: function(scale){rgba[2] = this.adjust_blue(color,null,scale).rgba[2]},
            saturation: function(scale){hsla[1] = this.adjust_saturation(color,null,scale).hsla[1]},
            lightness: function(scale){hsla[2] = this.adjust_lightness(color,null,scale).hsla[2]},
            alpha: function(scale){
                    var a =  this.adjust_alpha(color,null,scale).hsla[3];
                    rgba[3] = a;
                    hsla[3] = a;
                }
        }

        getKeys(opt).forEach(function(key){
            operations[key].call(this,opt[key]);
        },this);

        return {rgb: rgba.slice(0,3),
                rgba: rgba,
                hex: rgbToHEX(rgba),
                hsl: hsla.slice(0,3),
                hsla: hsla};
    }

    c_c.change_color = function(color,opt){
        var rgba = color.rgba().slice(0),
            hsla = color.hsla().slice(0);
        var operations = {
            red: function(val){rgba[0] = val},
            green: function(val){rgba[1] = val},
            blue: function(val){rgba[2] = val},
            hue: function(val){hsla[0] = val},
            saturation: function(val){hsla[1] = val},
            lightness: function(val){hsla[2] = val},
            alpha: function(val){
                    rgba[3] = val;
                    hsla[3] = val;
                }
        }

        Object.keys(opt).forEach(function(key){
            operations[key].call(this,opt[key]);
        },this);

        return {rgb: rgba.slice(0,3),
                rgba: rgba,
                hex: rgbToHEX(rgba),
                hsl: hsla.slice(0,3),
                hsla: hsla};
    }

    function getKeys(obj){
        return Object.keys(obj);
    }

    function getValues(obj){
        return  getKeys(obj).map(function(k){return obj[k]});
    }

    function findValue(obj,keyword){
        return getKeys(obj)[getValues(obj).indexOf(keyword)];
    }

    function hexToName(hex){
        return findValue(colorDict,hex)
    }

    // Conversion Functions
    function rgbToHEX(rgba){
        var rgb = rgba.slice(0,3);

        function d2h(d) {
            var hex = d.toString(16);
            hex = '00'.substr( 0, 2 - hex.length ) + hex;
            return hex;
        };

        return '#'+rgb.map(d2h).join('').toLowerCase();
    }

    function hexToRGB(hex){

        function h2d(h) {
            var decimal = parseInt(h, 16);
            return decimal;
        };

        return [
            h2d(hex.substr(1,2)),
            h2d(hex.substr(3,2)),
            h2d(hex.substr(5,2)),
        ].concat([1]);
    }

    function rgbToHSL(rgba){
        var r = rgba[0] / 255,
            g = rgba[1] / 255,
            b = rgba[2] / 255,
            max = Math.max(r,g,b),
            min = Math.min(r,g,b),
            h,
            s,
            l = (max + min) / 2,
            d = max - min,
            huecalc = {};
            huecalc[r] = function(){return (60 * (g - b) / d) + (g < b ? 360 : 0);}
            huecalc[g] = function(){return (60 * (b - r) / d) + 120;}
            huecalc[b] = function(){return (60 * (r - g) / d) + 240;}
        if(d === 0){
            h = s = 0; // grayscaled color
        }else{
            s = l < 0.5 ? d / (max + min) : d / (2 - max - min) ;
            h = huecalc[String(max)]();
        }
        return [Math.round(h), Math.round(s*100), Math.round(l*100)].concat([rgba[3]]);
    }

    function hslToRGB(hsla){
        var r,
            g,
            b,
            h = hsla[0] / 360,
            s = hsla[1] / 100,
            l = hsla[2] / 100;

        function hue2rgb(p, q, t) {
            if(t < 0) t += 1;
            if(t > 1) t -= 1;
            if(t < 1/6) return p + (q - p) * 6 * t;
            if(t < 1/2) return q;
            if(t < 2/3) return p + (q - p) * (2/3 - t) * 6;
            return p;
        }

        if(s === 0){
            r = g = b = l; // grayscaled color
        }else{
            var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
                p = 2 * l - q
            r = hue2rgb(p, q, h + 1/3),
            g = hue2rgb(p, q, h),
            b = hue2rgb(p, q, h - 1/3);
        }
        return [r,g,b].map(function(c){return Math.round(c*255)}).concat([hsla[3]]);
    }

    return c_c;

}();
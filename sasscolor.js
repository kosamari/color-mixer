!function() {
    var c_c = {
        version: "0.0.1"
    };

    this.c_c = c_c;

    //  color object constructor
    var Color = c_c.Color = function(opt){
        var rgbaval,hexval,hslaval;

        this.hex = function(str){
            if(arguments.length<=0){return hexval;}
            hexval = str.toUpperCase();
            rgbaval = hexToRGB(hexval);
            hslaval = rgbToHSL(rgbaval);
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
        }

        this.values = function(){
            return {rgb: this.rgb(),
                rgba: this.rgba(),
                hex: this.hex(),
                hsl: this.hsl(),
                hsla: this.hsla()};
        }
    }


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

        Object.keys(opt).forEach(function(key){
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

        Object.keys(opt).forEach(function(key){
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

    // Conversion Functions
    function rgbToHEX(rgba){
        var rgb = rgba.slice(0,3);

        function d2h(d) {
            var hex = d.toString(16);
            hex = '00'.substr( 0, 2 - hex.length ) + hex;
            return hex;
        };

        return '#'+rgb.map(d2h).join('').toUpperCase();
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
        ].concat([a]);
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

}();

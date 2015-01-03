!function() {
    var c_c = {
        version: "0.0.1"
    };

    this.c_c = c_c;

    //  color object constructor
    var Color = c_c.Color = function(opt){
        var rgbval,rgbaval,hexval,hslval,hslaval;

        this.hex = function(str){
            if(arguments.length<=0){return hexval;}
            hexval = str.toUpperCase();
            rgbval = hexToRGB(hexval);
            rgbaval = rgbval.concat([1]);
            hslval = rgbToHSL(rgbval);
            hslaval = hslval.concat([1]);
        }

        this.rgb = function(r,g,b){
            if(arguments.length<=0){return rgbval;}
            rgbval = [r,g,b];
            rgbaval = rgbval.concat([1]);
            hexval = rgbToHEX(rgbval);
            hslval = rgbToHSL(rgbval);
            hslaval = hslval.concat([1]);
        }

        this.rgba = function(r,g,b,a){
            if(arguments.length<=0){return rgbaval;}
            rgbval = [r,g,b];
            rgbaval = rgbval.concat([a]);
            hexval = rgbToHEX(rgbval);
            hslval = rgbToHSL(rgbval);
            hslaval = hslval.concat([a]);
        }

        this.hsl = function(h,s,l){
            if(arguments.length<=0){return hslval;}
            hslval = [h,s,l];
            hslaval = hslval.concat([1]);
            rgbval = hslToRGB(hslval);
            rgbaval = rgbval.concat([1]);
            hexval = rgbToHEX(rgbval);
        }

        this.hsla = function(h,s,l,a){
            if(arguments.length<=0){ return hslaval;}
            hslval = [h,s,l];
            hslaval = hslval.concat([a]);
            rgbval = hslToRGB(hslval);
            rgbaval = rgbval.concat([a]);
            hexval= rgbToHEX(rgbval);
        }

        this.mix = function(color1, color2, w) {
            var weight = w ? w : 50,
                base = color1.rgba(),
                brend = color2.rgba(),
                newcolor = base.map(function(c,i){
                    if(i === 3){ return brend[i] + (c - brend[i]) * (weight / 100); }
                    return Math.floor(brend[i] + (c - brend[i]) * (weight / 100));
                });

            rgbval = newcolor.slice(0,3);
            rgbaval = newcolor;
            hexval = rgbToHEX(rgbval);
            hslval = rgbToHSL(rgbval);
            hslaval = hslval.concat([rgbaval[3]]);
        }

        this.values = function(){
            return {rgb: rgbval,
                rgba: rgbaval,
                hex: hexval,
                hsl: hslval,
                hsla: hslaval};
        }
    }


    // color manipulation methods
    // 'color' is an each instance of Color.
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

    c_c.invert = function(color){
        var inverted = color.rgba().map(function(c,i){
            if(i === 3) { return c; }
            return 255 - c;
        });

        return {rgb: inverted.slice(0,3),
                rgba: inverted,
                hex: color.rgbToHEX(inverted),
                hsl: rgbToHSL(inverted),
                hsla: rgbToHSL(inverted).concat([inverted[3]])};
    }

    c_c.adjust_hue = function(color,deg){
        var rgb,
            base = color.hsla().slice(0),
            diff = 360 - (base[0]+deg);

        base[0] = diff > 360 ? 360 - (diff%360) : Math.abs(diff%360);
        rgb = hslToRGB(base);

        return {rgb: rgb,
                rgba: rgb.concat(base[3]),
                hex: rgbToHEX(rgb),
                hsl: base.slice(0,3),
                hsla: base};
    }

    c_c.complement = function(color){
        return color.adjust_hue(180)
    }

    c_c.saturate = function(color,deg){
        var rgb,
            base = color.hsla().slice(0);
        base[1] = Math.min(base[1] + deg, 100);
        rgb = hslToRGB(base);

        return {rgb: rgb,
                rgba: rgb.concat(base[3]),
                hex: rgbToHEX(rgb),
                hsl: base.slice(0,3),
                hsla: base};
    }

    c_c.desaturate = function(color,deg){
        var rgb,
            base = color.hsla().slice(0);
        base[1] = Math.max(base[1] - deg, 0);
        rgb = hslToRGB(base);

        return {rgb: rgb,
                rgba: rgb.concat(base[3]),
                hex: rgbToHEX(rgb),
                hsl: base.slice(0,3),
                hsla: base};
    }

    c_c.grayscale = function(color){
        return color.desaturate(100)
    }

    c_c.lighten = function(color,deg){
        var rgb,
            base = color.hsla().slice(0);
        base[2] = Math.min(base[2] + deg, 100);
        rgb = hslToRGB(base);

        return {rgb: rgb,
                rgba: rgb.concat(base[3]),
                hex: rgbToHEX(rgb),
                hsl: base.slice(0,3),
                hsla: base};
    }

    c_c.darken = function(color,deg){
        var rgb,
            base = color.hsla().slice(0);
        base[2] = Math.max(base[2] - deg, 0);
        rgb = hslToRGB(base);

        return {rgb: rgb,
                rgba: rgb.concat(base[3]),
                hex: rgbToHEX(rgb),
                hsl: base.slice(0,3),
                hsla: base};
    }

    c_c.alpha = function(color){
        return color.rgba()[3];
    }

    c_c.opacity = function(color){
        return this.alpha(color);
    }

    c_c.opacify = function(color,deg){
        var a = Math.round(Math.min(this.alpha(color) + deg, 1)*100)/100;

        return {
            rgba: color.rgb().concat([a]),
            hsla: color.hsl().concat([a])
        };
    }

    c_c.transparentize = function(color,deg){
        var a = Math.round(Math.max(this.alpha(color) - deg, 0)*100)/100;

        return {
            rgba: color.rgb().concat([a]),
            hsla: color.hsl().concat([a])
        };
    }

    c_c.fade_in = function(color,deg){
        return this.opacify(color,deg);
    }

    c_c.fade_out = function(color,deg){
        return this.transparentize(color,deg);
    }


    // Conversion Functions
    function rgbToHEX(rgb){
        if(rgb.length>3){rgb = rgb.slice(0,3)}

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
            h2d(hex.substr(5,2))
        ];
    }

    function rgbToHSL(rgb){
        var r = rgb[0] / 255,
            g = rgb[1] / 255,
            b = rgb[2] / 255,
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
        return [Math.round(h), Math.round(s*100), Math.round(l*100)];
    }

    function hslToRGB(hsl){
        var r,
            g,
            b,
            h = hsl[0] / 360,
            s = hsl[1] / 100,
            l = hsl[2] / 100;

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
                p = 2 * l - q;
            r = hue2rgb(p, q, h + 1/3),
            g = hue2rgb(p, q, h),
            b = hue2rgb(p, q, h - 1/3);
        }
        return [r,g,b].map(function(c){return Math.round(c*255)});
    }
}();
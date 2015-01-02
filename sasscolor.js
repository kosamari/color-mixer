'use strict';

function Color(opt){
    var rgbval,rgbaval,hexval,hslval,hslaval;

    this.hex = function(str){
        if(arguments.length<=0){return hexval;}
        hexval = str;
        rgbval = this.hexToRGB(hexval);
        rgbaval = rgbval.concat([1]);
        hslval = this.rgbToHSL(rgbval);
        hslaval = hslval.concat([1]);
    }

    this.rgb = function(r,g,b){
        if(arguments.length<=0){return rgbval;}
        rgbval = [r,g,b];
        rgbaval = rgbval.concat([1]);
        hexval = this.rgbToHEX(rgbval);
        hslval = this.rgbToHSL(rgbval);
        hslaval = hslval.concat([1]);
    }

    this.rgba = function(r,g,b,a){
        if(arguments.length<=0){return rgbaval;}
        rgbval = [r,g,b];
        rgbaval = rgbval.concat([a]);
        hexval = this.rgbToHEX(rgbval);
        hslval = this.rgbToHSL(rgbval);
        hslaval = hslval.concat([a]);
    }

    this.hsl = function(h,s,l){
        if(arguments.length<=0){return hslval;}
        hslval = [h,s,l];
        hslaval = hslval.concat([1]);
        rgbval = this.hslToRGB(hslval);
        rgbaval = rgbval.concat([1]);
        hexval = this.rgbToHEX(rgbval);
    }

    this.hsla = function(h,s,l,a){
        if(arguments.length<=0){ return hslaval;}
        hslval = [h,s,l];
        hslaval = hslval.concat([a]);
        rgbval = this.hslToRGB(hslval);
        rgbaval = rgbval.concat([a]);
        hexval= this.rgbToHEX(rgbval);
    }

    this.mix = function(color1, color2, w) {
        var weight = w ? w : 50,
            c1 = color1.rgba(),
            c2 = color2.rgba(),
            arr = [],
            i,
            val,
            result;
        for(i=0;i<3;i++){
            val = Math.floor(c2[i] + (c1[i] - c2[i]) * (weight / 100));
            arr.push(val);
        }
        arr.push(c2[3] + (c1[3] - c2[3]) * (weight / 100));
        rgbval = arr.slice(0,3);
        rgbaval = arr;
        hexval = this.rgbToHEX(rgbval);
        hslval = this.rgbToHSL(rgbval);
        hslaval = hslval.concat([rgbaval[3]]);
    }

}

Color.prototype.red = function(){
    return this.hex.substr(1,2).toUpperCase();
}
Color.prototype.green = function(){
    return this.hex.substr(3,2).toUpperCase();
}
Color.prototype.blue = function(){
    return this.hex.substr(5,2).toUpperCase();
}
Color.prototype.rgbToHEX = function(arr){
    var color = '#';
    function d2h(d) {
        var hex = d.toString(16);
        hex = '00'.substr( 0, 2 - hex.length ) + hex;
        return hex;
    };

    color += d2h(arr[0]);
    color += d2h(arr[1]);
    color += d2h(arr[2]);
    return color;
}

Color.prototype.hexToRGB = function(str){
    var arr = [];
    function h2d(h) {
        var decimal = parseInt(h, 16);
        return decimal;
    };
    arr.push(h2d(str.substr(1,2)));
    arr.push(h2d(str.substr(3,2)));
    arr.push(h2d(str.substr(5,2)));
    return arr;
}
Color.prototype.rgbToHSL = function(rgb){
    var r = rgb[0] / 255,
        g = rgb[1] / 255,
        b = rgb[2] / 255,
        max = Math.max(r, g, b),
        min = Math.min(r, g, b),
        h,
        s,
        l = (max + min) / 2,
        diff = max - min,
        huecalc = {};
        huecalc[r] = function(){return (60 * (g - b) / diff) + (g < b ? 360 : 0);}
        huecalc[g] = function(){return (60 * (b - r) / diff) + 120;}
        huecalc[b] = function(){return (60 * (r - g) / diff) + 240;}

    if(diff === 0){
        h = s = 0; // color-less
    }else{
        s = l < 0.5 ? diff / (max + min) : diff / (2 - max - min) ;
        h = huecalc[String(max)]();
    }
    return [Math.round(h), Math.round(s*100), Math.round(l*100)];
}
Color.prototype.hslToRGB = function(hsl){
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
        r = g = b = l; // color-less
    }else{
        var q = l < 0.5 ? l * (1 + s) : l + s - l * s,
            p = 2 * l - q;
        r = hue2rgb(p, q, h + 1/3),
        g = hue2rgb(p, q, h),
        b = hue2rgb(p, q, h - 1/3);
    }

    return [Math.round(r*255), Math.round(g*255), Math.round(b*255)];
}


var mycolor = new Color();
mycolor.hex('#2d2dc8')

var mycolor2 = new Color();
mycolor2.rgba(234,34,32,0.3)

var mycolor3 = new Color();
mycolor3.mix(mycolor2,mycolor,90)

console.log(mycolor.hsl())
console.log(mycolor3.rgb())
console.log(mycolor3.rgba())
console.log(mycolor.hsl());

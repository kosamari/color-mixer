'use strict';

/*
Calc functions for both ways
*/
// 255 => ff
function toHEX(d) {
    var hex = d.toString(16);
    hex = '00'.substr( 0, 2 - hex.length ) + hex;
    return hex;
}

//conversion ff => 255
function toDecimal(h) {
    var decimal = parseInt(h, 16);
    return decimal;
}

/*
Converters
*/
//Convert HEX code to RGB decimals in array
function convertToDecimal(hexstr){
    var arr = [];
    arr.push(toDecimal(hexstr.substr(1,2)));
    arr.push(toDecimal(hexstr.substr(3,2)));
    arr.push(toDecimal(hexstr.substr(5,2)));
    return arr;
}

// Convert RGB decimal to HEX code in string
function convertToHEX(arr){
    var color = '#';
    color += toHEX(arr[0]);
    color += toHEX(arr[1]);
    color += toHEX(arr[2]);
    return color;
}


function mix(color1, color2, w) {
    if(color1.length !== 7 && color2.length !== 7){ return; }
    var weight = w ? w : 50,
        c1 = convertToDecimal(color1),
        c2 = convertToDecimal(color2),
        arr = [],
        i,
        val,
        result;

    for(i=0;i<3;i++){
        val = Math.floor(c2[i] + (c1[i] - c2[i]) * (weight / 100));
        arr.push(val);
    }
    result = convertToHEX(arr).toUpperCase();
    return result;
}

function rgb(r, g, b) {
    if( r<0 || r>255 || g<0 || g>255 || b<0 || b>255){ return; }
    var arr = [r,g,b],
        result = convertToHEX(arr).toUpperCase();
    return result;
}

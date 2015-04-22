Color Mixer 
===========
``` Hi there, I'm (c_c). ```
Little Javascipt helpers to create color chips. 
Manipulate colors like you would in Sass, or see pre-set color chips in your browser console. 
This is made for quick prototyping to decide on color schemes.

## TL;DR;
![color-mixer](https://cloud.githubusercontent.com/assets/4581495/7272473/15a4020c-e8b9-11e4-851a-8546ff2c5536.png)
![color_set](https://cloud.githubusercontent.com/assets/4581495/7272996/8ce8153e-e8bd-11e4-8c40-afc6189e501a.png)

## API Docs
``` (c_c) sorry, no documentation yet ```

## How to
### Create base color
```JavaScript
var red = new c_c.Color({hex:'#ff0000'})

//check color values
red.hex()  // "#ff0000"
red.hsl()  // [0, 100, 50]
red.hsla() // [0, 100, 50, 1]
red.rgb()  // [255, 0, 0]
red.rgba() // [255, 0, 0, 1]
red.name() // "red"
red.values() //{
             //    "hex":"#ff0000",,
             //    "hsl":[0,100,50],
             //    "hsla":[0,100,50,1],
             //    "rgb":[255,0,0],
             //    "rgba":[255,0,0,1],
             //    "name":"red"
             //}
```

### Mix 2 colors to create base color
```JavaScript
var red = new c_c.Color({hex:'#ff0000'})
var blue = new c_c.Color({name:'blue'})

var mixed = new c_c.Color({mix:[red,blue]}) // same as mix($color1, $color2) in Sass
var mixed2 = new c_c.Color({mix:[red,blue,30]}) // same as mix($color1, $color2, 30%) in Sass
mixed.hex()  // "#7f007f"
mixed2.hex() // "#4c00b2"
```

### Create subcolors based on base color
method names are comptible with color related Sass functions.
```JavaScript
var red = new c_c.Color({hex:'#ff0000'})

red.invert()   // same as inver($color) in Sass
red.darken(50) // same as darken($color, 50%) in Sass

// each color manipulation creates SubColor object refelenced by base color object
red.subcolors // => [SubColor, SubColor]
```

### Create subcolors set
```JavaScript
var red = new c_c.Color({hex:'#ff0000'})

red.desaturate_set(5)   // creates color chips including base color
                        // you can pass number of color chips to make
                        // lighten_set, darken_set, complement_set, invert_set, desaturate_set
```

### Print colors
```JavaScript
var red = new c_c.Color({hex:'#ff0000'})
c_c.print(red)

red.invert()
red.lighten(20)
c_c.print(red.subcolors)

// when you run this in browser console, you should see color chip output.
// if you are running this in node.js/io.js REPL, it will console.log hex value.
```



/**
 * https://www.youtube.com/watch?v=bV8Co98AYkA
 */
let strip = neopixel.create(DigitalPin.P0, 24, NeoPixelMode.RGB)
strip.showRainbow(1, 360)
basic.forever(function () {
    strip.show()
    strip.showRainbow(1, 360)
    basic.pause(100)
})

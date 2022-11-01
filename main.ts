basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P2) >= 1 && pins.analogReadPin(AnalogPin.P2) < 10) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    } else if (pins.analogReadPin(AnalogPin.P2) >= 11 && pins.analogReadPin(AnalogPin.P2) < 80) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    } else if (pins.analogReadPin(AnalogPin.P2) >= 81 && pins.analogReadPin(AnalogPin.P2) < 130) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    } else if (pins.analogReadPin(AnalogPin.P2) >= 131 && pins.analogReadPin(AnalogPin.P2) < 160) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    } else if (pins.analogReadPin(AnalogPin.P2) >= 161 && pins.analogReadPin(AnalogPin.P2) < 600) {
        music.playTone(440, music.beat(BeatFraction.Whole))
    }
})

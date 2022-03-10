radio.setGroup(1)
//  1 až 255
radio.setTransmitPower(7)
//  0 až 7
radio.onReceivedValue(function data_received(name: string, value: number) {
    let alarm: number;
    if (name == alarm) {
        alarm = 1
    } else {
        music.playTone(Note.C, music.beat(0))
    }
    
})
radio.setTransmitSerialNumber(true)
let data_list = []
let my_serial = control.deviceSerialNumber()
music.stopAllSounds()
input.onButtonPressed(Button.A, function on_button_pressed_a() {
    let alarm = 1
})
input.onLogoEvent(TouchButtonEvent.Pressed, function on_logo_event_pressed() {
    let learn = 1
})
radio.sendValue("alarm", 1)
radio.sendValue("alarm", 0)
radio.sendValue("learn", 1)
radio.sendValue("learn", 0)

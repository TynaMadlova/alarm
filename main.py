radio.set_group(1) # 1 až 255
radio.set_transmit_power(7) # 0 až 7
radio.on_received_value(data_received)
radio.set_transmit_serial_number(True)

data_list = []
my_serial = control.device_serial_number()

music.stop_all_sounds()

def on_button_pressed_a():
    alarm = 1
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_logo_event_pressed():
    learn = 1
input.on_logo_event(TouchButtonEvent.PRESSED, on_logo_event_pressed)


radio.send_value("alarm", 1)
radio.send_value("alarm", 0)
radio.send_value("learn", 1)
radio.send_value("learn", 0)

def data_received(name, value):
    if name == alarm:
        alarm = 1
    else:
        music.play_tone(Note.C, music.beat(0))
        
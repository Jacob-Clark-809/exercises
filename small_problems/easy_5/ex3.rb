def after_midnight(time)
  hours = (time[0].to_i * 10) + (time[1].to_i)
  minutes = (time[3].to_i * 10) + (time[4].to_i)
  ((hours * 60) + minutes) % (60 * 24)
end

def before_midnight(time)
  ((60 * 24) - after_midnight(time)) % (60 * 24)

end

p after_midnight('00:00') == 0
p before_midnight('00:00') == 0
p after_midnight('12:34') == 754
p before_midnight('12:34') == 686
p after_midnight('24:00') == 0
p before_midnight('24:00') == 0

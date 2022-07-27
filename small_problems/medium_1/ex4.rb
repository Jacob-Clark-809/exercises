require 'pry'

def on_off(n)
  lights = [0] * n
  n.times do |count|
    lights = switch(lights, count + 1)
  end
  on = []
  n.times do |count|
    on << count + 1 if lights[count] == 1
  end
  on
end

def switch(lights, which)
  count = 0
  lights.map do |light|
    count += 1
    if count % which == 0
      (light + 1) % 2
    else
      light
    end
  end
end


p on_off(5) == [1, 4]
p on_off(10) == [1, 4, 9]
p on_off(1000)
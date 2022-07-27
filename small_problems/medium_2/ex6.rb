def triangle(angle1, angle2, angle3)
  angles = [angle1, angle2, angle3].sort
  if invalid?(angles)
    :invalid
  elsif angles[2] > 90
    :obtuse
  elsif angles[2] == 90
    :right
  else
    :acute
  end
end

def invalid?(angles)
  !(angles.sum == 180 && angles.all? { |angle| angle > 0 })
end

p triangle(60, 70, 50) == :acute
p triangle(30, 90, 60) == :right
p triangle(120, 50, 10) == :obtuse
p triangle(0, 90, 90) == :invalid
p triangle(50, 50, 50) == :invalid
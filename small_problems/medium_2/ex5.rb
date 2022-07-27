def triangle(a, b, c)
  lengths = [a, b, c].sort
  if invalid?(lengths)
    :invalid
  elsif equilateral?(lengths)
    :equilateral
  elsif isosceles?(lengths)
    :isosceles
  else
    :scalene
  end
end

def invalid?(lengths)
  return true if lengths[0] + lengths[1] <= lengths[2]
  return true if lengths[0] < 0 || lengths[1] < 0 || lengths[2] < 0
  false
end

def equilateral?(lengths)
  lengths[0] == lengths[1] && lengths[1] == lengths[2]
end

def isosceles?(lengths)
  lengths[0] == lengths[1] || lengths [0] == lengths[2] || lengths[1] == lengths[2]
end

p triangle(3, 3, 3) == :equilateral
p triangle(3, 3, 1.5) == :isosceles
p triangle(3, 4, 5) == :scalene
p triangle(0, 3, 3) == :invalid
p triangle(3, 1, 1) == :invalid
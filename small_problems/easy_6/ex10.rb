def triangle(length)
  count = 1
  length.times do
    puts " " * (length - count) + "*" * count
    count += 1
  end
end

triangle(5)
triangle(9)
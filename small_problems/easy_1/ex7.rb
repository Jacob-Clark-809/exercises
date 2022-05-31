def stringy(num, type=1)
  bin = ''
  num.times do |count|
    if type == 1
      count.even? ? bin << '1' : bin << '0'
    else
      count.odd? ? bin << '1' : bin << '0'
    end
  end
  bin
end

puts stringy(6, 0)
puts stringy(9, 1)
puts stringy(4)
puts stringy(7, 0)
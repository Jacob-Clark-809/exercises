def multisum(limit)
  (1..limit).to_a.select { |val| val % 3 == 0 || val % 5 == 0 }.reduce(:+)
end

p multisum(3) == 3
p multisum(5) == 8
p multisum(10) == 33
p multisum(1000) == 234168
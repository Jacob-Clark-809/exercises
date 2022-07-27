def fibonacci(n)
  return 1 if n == 1 || n == 2
  second_last = 1
  last = 1
  while n > 2
    current = second_last + last
    second_last, last = last, current
    n -= 1
  end
  current
end

p fibonacci(20) == 6765
p fibonacci(100) == 354224848179261915075
p fibonacci(100_001) # => 4202692702.....8285979669707537501
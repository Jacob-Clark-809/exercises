
def find_fibonacci_index_by_length(length)
  third_last = 1
  second_last = 1
  digits = 0
  count = 2
  while digits < length
    current = third_last + second_last
    digits = current.to_s.length
    count += 1
    third_last = second_last
    second_last = current
  end
  count
end

p find_fibonacci_index_by_length(2) == 7          # 1 1 2 3 5 8 13
p find_fibonacci_index_by_length(3) == 12         # 1 1 2 3 5 8 13 21 34 55 89 144
p find_fibonacci_index_by_length(10) == 45
p find_fibonacci_index_by_length(100) == 476
p find_fibonacci_index_by_length(1000) == 4782
p find_fibonacci_index_by_length(10000) == 47847
def count_occurrences(arr)
  count = Hash.new(0)
  arr.each { |val| count[val] += 1 }
  puts count
end

vehicles = [
  'car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'
]

count_occurrences(vehicles)
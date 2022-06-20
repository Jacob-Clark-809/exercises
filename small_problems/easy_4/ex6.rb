def running_total(arr)
  total = 0
  arr.map { |val| total += val}
end

# def running_total(arr)
#   return arr if arr == []
#   run = [arr[0]]
#   arr.inject do |sum, val|
#     sum += val
#     run << sum
#     sum
#   end
#   run
# end


p running_total([2, 5, 13]) == [2, 7, 20]
p running_total([14, 11, 7, 15, 20]) == [14, 25, 32, 47, 67]
p running_total([3]) == [3]
p running_total([]) == []
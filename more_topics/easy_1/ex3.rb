def missing(arr)
  all = (arr.first..arr.last).to_a
  arr.each { |ele| all.delete(ele) }
  all
end

p missing([-3, -2, 1, 5]) == [-1, 0, 2, 3, 4]
p missing([1, 2, 3, 4]) == []
p missing([1, 5]) == [2, 3, 4]
p missing([6]) == []
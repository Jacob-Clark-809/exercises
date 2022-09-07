def zip(arr1, arr2)
  result = []
  arr1.each_with_index { |val, i| result << [val, arr2[i]] }
  result
end

p zip([1, 2, 3], [4, 5, 6]) == [[1, 4], [2, 5], [3, 6]]
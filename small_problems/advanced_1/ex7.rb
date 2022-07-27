def merge(arr_1, arr_2)
  result = []
  ind_1 = 0
  ind_2 = 0
  while ind_1 < arr_1.length && ind_2 < arr_2.length
    current_1 = arr_1[ind_1]
    current_2 = arr_2[ind_2]
    if current_1 < current_2
      result << current_1
      ind_1 += 1
    else
      result << current_2
      ind_2 += 1
    end
  end

  if ind_1 < arr_1.length
    ind_1.upto(arr_1.length - 1) { |ind| result << arr_1[ind] }
  elsif ind_2 < arr_2.length
    ind_2.upto(arr_2.length - 1) { |ind| result << arr_2[ind] }
  end

  result
end

p merge([1, 5, 9], [2, 6, 8]) == [1, 2, 5, 6, 8, 9]
p merge([1, 1, 3], [2, 2]) == [1, 1, 2, 2, 3]
p merge([], [1, 4, 5]) == [1, 4, 5]
p merge([1, 4, 5], []) == [1, 4, 5]
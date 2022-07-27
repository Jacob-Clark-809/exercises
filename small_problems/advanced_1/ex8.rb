require 'pry'

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

def merge_sort(arr)
  n = arr.size / 2
  return arr if arr.size == 1

  half_1 = arr[0...n]
  half_2 = arr[n..-1]

  half_1 = merge_sort(half_1)
  half_2 = merge_sort(half_2)

  merge(half_1, half_2)
end

p merge_sort([1, 2, 1, 3])
def rotate_rightmost_digits(num, times)
  digits = num.digits.reverse
  first_half = digits[0...-times]
  second_half = rotate_array(digits[-times..-1])
  (first_half + second_half).join.to_i
end

def rotate_array(arr)
  arr[1..-1] << arr[0]
end

p rotate_rightmost_digits(735291, 1) == 735291
p rotate_rightmost_digits(735291, 2) == 735219
p rotate_rightmost_digits(735291, 3) == 735912
p rotate_rightmost_digits(735291, 4) == 732915
p rotate_rightmost_digits(735291, 5) == 752913
p rotate_rightmost_digits(735291, 6) == 352917
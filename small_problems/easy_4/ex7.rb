
NUMBERS = %w(0 1 2 3 4 5 6 7 8 9)

def string_to_integer(str)
  num = 0
  str.reverse.chars.each_with_index do |digit, index|
    num += NUMBERS.index(digit) * (10**index)
  end
  num
end

p string_to_integer('4321') == 4321
p string_to_integer('570') == 570

NUMBERS = %w(0 1 2 3 4 5 6 7 8 9)

def string_to_integer(str)
  num = 0
  str.chars.each_with_index do |digit, index|
    num += NUMBERS.index(digit) * (10**index)
  end
  num
end

def string_to_signed_integer(str)
  if str.start_with?('-')
    string_to_integer(str.reverse.chop) * -1
  elsif str.start_with?('+')
    string_to_integer(str.reverse.chop)
  else
    string_to_integer(str.reverse)
  end
end

p string_to_signed_integer('4321') == 4321
p string_to_signed_integer('-570') == -570
p string_to_signed_integer('+100') == 100

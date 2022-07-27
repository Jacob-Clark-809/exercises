def featured(num)
  count = num / 7
  found = false
  impossible = false
  until found
    count += 1
    current = 7 * count
    break if current.to_s.length > 10
    found = true if current.odd? && unique_digits?(current)
  end

  unless found
    puts "There is no possible number that fulfills those requirements."
  else
    current
  end
end

def unique_digits?(num)
  num.digits.uniq == num.digits
end

p featured(12) == 21
p featured(20) == 21
p featured(21) == 35
p featured(997) == 1029
p featured(1029) == 1043
p featured(999_999) == 1_023_547
p featured(999_999_987) == 1_023_456_987

featured(9_999_999_999) # -> There is no possible number that fulfills those requirements
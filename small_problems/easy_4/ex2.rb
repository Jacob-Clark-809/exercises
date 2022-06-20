
def century(num)
  cent = num % 100 == 0 ? num / 100 : (num / 100) + 1

  if [11 ,12, 13].include?(cent % 100)
    ending = "th"
  elsif cent % 10 == 1
    ending = "st"
  elsif cent % 10 == 2
    ending = "nd"
  elsif cent % 10 == 3
    ending = "rd"
  else
    ending = "th"
  end

  cent.to_s + ending
end

p century(2000) == '20th'
p century(2001) == '21st'
p century(1965) == '20th'
p century(256) == '3rd'
p century(5) == '1st'
p century(10103) == '102nd'
p century(1052) == '11th'
p century(1127) == '12th'
p century(11201) == '113th'

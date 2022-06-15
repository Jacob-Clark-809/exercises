POSITIONS = %w(1st 2nd 3rd 4th 5th)

numbers = []
POSITIONS.each do |position|
  puts ">> Enter the #{position} number:"
  ans = gets.chomp.to_i
  numbers << ans
end

puts ">> Enter the last number:"
search_val = gets.chomp.to_i

if numbers.include?(search_val)
  puts "The number #{search_val} appears in #{numbers}."
else
  puts "The number #{search_val} does not appear in #{numbers}"
end
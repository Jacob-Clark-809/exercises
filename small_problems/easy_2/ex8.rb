puts ">> Please enter an integer greater than 0:"
number = gets.chomp.to_i
puts ">> Enter 's' to computer the sum, 'p' to computer the product:"
type = gets.chomp

if type == 's'
  sum = (1..number).to_a.reduce(:+)
  puts ">> The sum of integers between 1 and #{number} is #{sum}"
elsif type == 'p'
  product = (1..number).to_a.reduce(:*)
  puts ">> The product  of the integers between 1 and #{number} is #{product}"
else
  puts ">> Invalid selection."
end

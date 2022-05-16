inp = nil
loop do
  puts ">> How many output lines do you want? Enter a number >= 3:"
  inp = gets.chomp.to_i
  break if inp >= 3
  puts ">> That's not enough lines"
end
inp.times{puts "Launch School is the best!"}


puts ">> What is the bill?"
bill = gets.chomp.to_f

puts ">> What is the tip percentage?"
percent = gets.chomp.to_f

tip = bill * percent * 0.01
puts ">> The tip is $#{tip}"
puts ">> The total is $#{bill + tip}"
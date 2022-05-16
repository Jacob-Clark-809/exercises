PASS = "Let me in!"
loop do
  puts ">> Please enter your password:"
  attempt = gets.chomp
  break if attempt == PASS
  puts ">> Invalid password!"
end
puts "Welcome!"
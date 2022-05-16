PASS = "Let me in!"
USER = "JC123"
loop do
  puts ">> Please enter your username:"
  user_try = gets.chomp
  puts ">> Please enter your password:"
  pass_try = gets.chomp
  break if user_try == USER && pass_try == PASS
  puts ">> Invalid username or password."
end
puts "Welcome!"
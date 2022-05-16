 puts "Do you want me to print something? (y/n)"
loop do
  answer = gets.chomp.downcase
  case answer
  when "y"
    puts "something"
    break
  when "n"
    break
  else
    puts "Invalid input! Please enter y or n"
  end
end


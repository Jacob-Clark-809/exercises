def valid_number?(number_string)
  number_string.to_i.to_s == number_string && number_string.to_i != 0
end

x = nil
y = nil
loop do
  
  loop do
    puts "Please enter a positive or negative integer:"
    x = gets.chomp
    break if valid_number?(x)
    if x.to_i.to_s == x
      puts "Invalid input. Only non-zero integers are allowed."
    else
      puts "Invalid input."
    end
  end
  
  loop do
    puts "Please enter a positive or negative integer:"
    y = gets.chomp
    break if valid_number?(y)
    if y.to_i.to_s == y
      puts "Invalid input. Only non-zero integers are allowed."
    else
      puts "Invalid input."
    end
  end
  
  x = x.to_i
  y = y.to_i
  break if x*y < 0
  puts "Sorry. One integer must be positive, one must be negative."
  puts "Please start over."
end

puts "#{x} + #{y} = #{x + y}"
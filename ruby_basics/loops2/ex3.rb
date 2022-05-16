process_the_loop = [true, false].sample

while process_the_loop
  puts "The loop was processed"
  exit
end

puts "The loop wasn't processed!"
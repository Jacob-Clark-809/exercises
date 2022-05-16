count = 1

loop do
  answer = count.even? ? "#{count} is even!" : "#{count} is odd!"
  puts answer
  count += 1
  break if count > 5
end
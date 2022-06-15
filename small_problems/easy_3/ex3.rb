puts ">> Please write a word or multiple words:"
words = gets.chomp

count = words.split.map {|word| word.length}.reduce(:+)
puts "There are #{count} characters in '#{words}'"
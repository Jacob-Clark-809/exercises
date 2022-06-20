def print_in_box(sentence)
  outer_line(sentence)
  inner_line(sentence)
  middle_line(sentence)
  inner_line(sentence)
  outer_line(sentence)
end

def outer_line(sentence)
  print '+'
  (sentence.length + 2).times { print '-' }
  puts '+'
end

def inner_line(sentence)
  print '|'
  (sentence.length + 2).times { print ' ' }
  puts '|'
end

def middle_line(sentence)
  puts '| ' + sentence + ' |'
end

print_in_box('')
print_in_box('Hello my friend')
print_in_box('I hope this works!!!')
print_in_box('This is an incredibly useful method that I will used alot!')

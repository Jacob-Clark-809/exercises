def anagram(one, two)
  one.chars.sort == two.chars.sort
end

words =  ['demo', 'none', 'tied', 'evil', 'dome', 'mode', 'live',
          'fowl', 'veil', 'wolf', 'diet', 'vile', 'edit', 'tide',
          'flow', 'neon']
copy = words.clone

while words != []
  to_print = []
  first = words[0]
  copy.each do |word|
    to_print << words.delete(word) if anagram(first, word)
  end
  p to_print
end

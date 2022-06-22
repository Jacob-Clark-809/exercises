def center_of(sentence)
  half = sentence.length / 2
  case
  when sentence.length % 2 == 0
    sentence[half - 1, 2]
  else
    sentence[half]
  end
end

p center_of('I love ruby') == 'e'
p center_of('Launch School') == ' '
p center_of('Launch') == 'un'
p center_of('Launchschool') == 'hs'
p center_of('x') == 'x'
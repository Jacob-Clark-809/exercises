
def ascii_value(sentence)
  return 0 if sentence == ''
  sentence.chars.reduce(0) do |memo, char|
    memo += char.ord
  end
end

p ascii_value('Four score') == 984
p ascii_value('Launch School') == 1251
p ascii_value('a') == 97
p ascii_value('') == 0
